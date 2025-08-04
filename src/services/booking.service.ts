import { FindOptions, Transaction } from "sequelize";
import sequelize from "@src/config/connection";
import {
    BookingModel, 
    UserModel,    
    PassengersModel,
    BookingsPassengersModel,
    DestinationsModel, 
    BookingStatusModel, 
    CountriesModel,
    DocumentTypesModel,
    GenderModel,
    AuthModel,
    AirItineraryInformationModel,
    InstallmentModel
} from "@src/models";
import { ISmartBookingRequest, IBookingAttributes, IKiuBookingResponse } from "@src/types/booking.type";
import { CustomError } from "@src/utils/custom-exception.error";
import { KiuService } from "./kiu.service";
import { parse, format } from 'date-fns';

const kiuService = new KiuService();

// Helper function for KIU document type transformation
const getKiuDocumentTypes = (docTypeCode: string) => {
    switch (docTypeCode) {
        case 'V':
            return { foid_type: 'ID', document_type: 'I' };
        case 'E':
            return { foid_type: 'NI', document_type: 'I' };
        case 'P':
            return { foid_type: 'PP', document_type: 'P' };
        default:
            // Default or error case
            return { foid_type: 'ID', document_type: 'I' };
    }
};

export class BookingService {

    public async createSmartBooking(payload: ISmartBookingRequest, userId: string): Promise<IBookingAttributes> {
        let transaction: Transaction | undefined;
        try {
            transaction = await sequelize.transaction();

            const auth = await AuthModel.findByPk(userId, { transaction });
            if (!auth) {
                throw new CustomError("Usuario no autenticado o no encontrado.", 404);
            }

            // Data Transformation for KIU Payload & DB
            const countryIds = [
                payload.fk_contact_country_id,
                ...payload.passengers.map(p => p.fk_nationality_country_id),
                ...payload.passengers.map(p => p.fk_issue_country_id)
            ];
            const genderIds = payload.passengers.map(p => p.fk_gender_id);
            const docTypeCodes = payload.passengers.map(p => p.document_type);

            const [countries, genders, docTypes] = await Promise.all([
                CountriesModel.findAll({ where: { id: [...new Set(countryIds)] }, transaction, attributes: ['id', 'code'] }),
                GenderModel.findAll({ where: { id: [...new Set(genderIds)] }, transaction, attributes: ['id', 'code'] }),
                DocumentTypesModel.findAll({ where: { code: [...new Set(docTypeCodes)] }, transaction, attributes: ['id', 'code'] })
            ]);

            const countryMap = new Map(countries.map(c => [c.getDataValue('id'), c.getDataValue('code')]));
            const genderMap = new Map(genders.map(g => [g.getDataValue('id'), g.getDataValue('code')]));
            const docTypeIdMap = new Map(docTypes.map(d => [d.getDataValue('code'), d.getDataValue('id')]));

            const kiuPassengers = payload.passengers.map(p => {
                const kiuDocs = getKiuDocumentTypes(p.document_type);
                const passenger = {
                    surname: p.surname,
                    name: p.name,
                    gender: genderMap.get(p.fk_gender_id),
                    foid_type: kiuDocs.foid_type, // Transformed
                    document_type: kiuDocs.document_type, // Transformed
                    foid_id: p.foid_id,
                    date_of_birth: format(parse(p.date_of_birth, 'yyyy-MM-dd', new Date()), 'ddMMMyy').toUpperCase(),
                    passenger_type_code: p.passenger_type_code,
                    nationality: countryMap.get(p.fk_nationality_country_id),
                    issue_country: countryMap.get(p.fk_issue_country_id),
                    expiration_date: format(parse(p.expiration_date, 'yyyy-MM-dd', new Date()), 'ddMMMyy').toUpperCase(),
                    representative: p.representative,
                };
                if (p.passenger_type_code.toUpperCase() !== 'INFT') {
                    delete passenger.representative;
                }
                return passenger;
            });

            const kiuPayload = {
                email: payload.email,
                phone: payload.phone,
                countryCode: countryMap.get(payload.fk_contact_country_id),
                carrier: payload.carrier,
                passengers: kiuPassengers,
                air_itinerary_information: payload.air_itinerary_information,
            };

            const kiuResponse: IKiuBookingResponse = await kiuService.createSmartBooking(kiuPayload);

            const bookingStatusPending = await BookingStatusModel.findOne({ where: { code: 'PENDING' }, transaction });
            if (!bookingStatusPending) {
                throw new CustomError("Booking status 'PENDING' not found.", 500);
            }

            const firstSegment = payload.air_itinerary_information[0];
            const lastSegment = payload.air_itinerary_information[payload.air_itinerary_information.length - 1];

            const newBooking = await BookingModel.create({
                contactEmail: payload.email,
                contactPhone: payload.phone,
                fk_contact_country_id: payload.fk_contact_country_id,
                fk_auth_id: auth.getDataValue('id'),
                totalAmount: payload.totalAmount,
                passengerCount: payload.passengers.length,
                bookingReference: kiuResponse.booking.booking.recordLocator,
                kiu_response: kiuResponse,
                fk_status_id: bookingStatusPending.getDataValue('id'),
                departureDate: firstSegment.departure_information.date,
                returnDate: lastSegment.departure_information.date,
                fk_created_by_id: userId,
                fk_updated_by_id: userId,
            }, { transaction });

            const itineraryData = payload.air_itinerary_information.map(item => ({
                ...item,
                fk_booking_id: newBooking.getDataValue('id'),
                departure_location_code: item.departure_information.location_code,
                departure_date: item.departure_information.date,
                departure_time: item.departure_information.time,
                arrival_location_code: item.arrival_information.location_code,
            }));
            await AirItineraryInformationModel.bulkCreate(itineraryData, { transaction });

            const passengerMap = new Map();
            const passengerCreationPromises = payload.passengers.map(async (p) => {
                const docTypeId = docTypeIdMap.get(p.document_type);
                if (!docTypeId) {
                    throw new CustomError(`Tipo de documento inválido: ${p.document_type}`);
                }
                const newPassenger = await PassengersModel.create({
                    firstSurname: p.surname,
                    firstName: p.name,
                    fk_gender_id: p.fk_gender_id,
                    dateOfBirth: p.date_of_birth,
                    fk_nationality_country_id: p.fk_nationality_country_id,
                    fk_issue_country_id: p.fk_issue_country_id,
                    fk_doc_type_id: docTypeId, // Use mapped ID
                    documentNumber: p.foid_id,
                    passengerType: p.passenger_type_code.toLowerCase(),
                }, { transaction });
                passengerMap.set(p.foid_id, newPassenger.getDataValue('id'));
                return newPassenger;
            });
            const createdPassengers = await Promise.all(passengerCreationPromises);

            await Promise.all(createdPassengers.map(async (p, index) => {
                const representativeFoid = payload.passengers[index].representative;
                if (p.getDataValue('passengerType') === 'infant' && representativeFoid) {
                    const adultId = passengerMap.get(representativeFoid);
                    if (adultId) {
                        await p.update({ associatedAdultId: adultId }, { transaction });
                    }
                }
            }));

            const bookingPassengersEntries = createdPassengers.map(p => ({
                fk_booking_id: newBooking.getDataValue('id'),
                fk_passenger_id: p.getDataValue('id'),
            }));
            await BookingsPassengersModel.bulkCreate(bookingPassengersEntries, { transaction });

            const dueDate = new Date();
            dueDate.setHours(dueDate.getHours() + 4);
            await InstallmentModel.create({
                fk_booking_id: newBooking.getDataValue('id'),
                amount_due: newBooking.getDataValue('totalAmount'),
                due_date: dueDate,
                status: 'pending',
            }, { transaction });

            await transaction.commit();

            const result = await this.getBookingById(newBooking.getDataValue('id'));
            if (!result) {
                throw new CustomError("Error fetching created booking", 500);
            }
            return result;

        } catch (error: unknown) {
            if (transaction) await transaction.rollback();
            throw error;
        }
    }

    public async getBookingById(id: string, includePassengers: boolean = true): Promise<IBookingAttributes | null> {
        try {
            const includes: any[] = [
                { model: BookingStatusModel, as: 'status' },
                { model: AirItineraryInformationModel, as: 'airItineraryInformation' },
                { model: AuthModel, as: 'auth', include: [{ model: UserModel, as: 'user', attributes: ['id', 'email', 'username'] }] },
                { model: UserModel, as: 'createdBy', attributes: ['id', 'username'] },
                { model: UserModel, as: 'updatedBy', attributes: ['id', 'username'] },
            ];

            if (includePassengers) {
                includes.push({
                    model: PassengersModel, 
                    as: 'passengers',
                    through: { attributes: [] },
                    include: [
                        { model: GenderModel, as: 'gender' },
                        { model: CountriesModel, as: 'nationality' },
                        { model: CountriesModel, as: 'issueCountry' },
                        { model: DocumentTypesModel, as: 'documentType' },
                    ]
                });
            }

            const bookingInstance = await BookingModel.findByPk(id, { include: includes });
            return bookingInstance ? bookingInstance.get({ plain: true }) as IBookingAttributes : null;
        } catch (error: any) {
            console.error("Error fetching booking by ID in service:", error);
            throw new CustomError(`Error obteniendo reserva: ${error.message}`, 500);
        }
    }

    public async getBookingsByAuthId(authId: string, options?: FindOptions<IBookingAttributes>): Promise<{ rows: IBookingAttributes[], count: number }> {
        try {
            const defaultOptions: FindOptions<IBookingAttributes> = {
                where: { fk_auth_id: authId, deleted: false },
                include: [
                    { model: BookingStatusModel, as: 'status', attributes: ['id', 'name', 'code'] },
                ],
                order: [['createdAt', 'DESC']],
            };
            const finalOptions = { ...defaultOptions, ...options };
             if (options?.where) {
                finalOptions.where = { ...defaultOptions.where, ...options.where };
            }

            const { rows, count } = await BookingModel.findAndCountAll(finalOptions);
            return { rows: rows.map(r => r.get({ plain: true }) as IBookingAttributes), count };
        } catch (error: any) {
            console.error("Error fetching bookings by auth ID in service:", error);
            throw new CustomError(`Error obteniendo reservas del cliente: ${error.message}`, 500);
        }
    }
    
    public async getAllBookings(options?: FindOptions<IBookingAttributes>): Promise<{ rows: IBookingAttributes[], count: number }> {
        try {
            const defaultOptions: FindOptions<IBookingAttributes> = {
                where: { deleted: false },
                 include: [
                    { model: BookingStatusModel, as: 'status', attributes: ['id', 'name', 'code'] },
                    { model: AuthModel, as: 'auth', include: [{model: UserModel, as: 'user', attributes: ['id', 'email', 'username']}] },
                ],
                order: [['createdAt', 'DESC']],
            };
             const finalOptions = { ...defaultOptions, ...options };
             if (options?.where) {
                finalOptions.where = { ...defaultOptions.where, ...options.where };
            }
            const { rows, count } = await BookingModel.findAndCountAll(finalOptions);
            return { rows: rows.map(r => r.get({ plain: true })), count };
        } catch (error: any) {
            console.error("Error fetching all bookings in service:", error);
            throw new CustomError(`Error obteniendo todas las reservas: ${error.message}`, 500);
        }
    }

    public async updateBookingStatus(id: string, statusId: string, paymentSuccessful: boolean | undefined, userId: string): Promise<IBookingAttributes | null> {
        let transaction: Transaction | undefined;
        try {
            transaction = await sequelize.transaction();
            const bookingInstance = await BookingModel.findByPk(id, { transaction });
            if (!bookingInstance || bookingInstance.get('deleted')) {
                throw new CustomError( "Reserva no encontrada.", 404);
            }

            const statusExists = await BookingStatusModel.findByPk(statusId, { transaction });
            if (!statusExists) {
                throw new CustomError("El estado proporcionado no es válido.", 400);
            }
            
            const updatePayload: Partial<IBookingAttributes> = {
                fk_status_id: statusId,
                fk_updated_by_id: userId,
            };
            if (paymentSuccessful !== undefined) {
                updatePayload.paymentSuccessful = paymentSuccessful;
            }

            await bookingInstance.update(updatePayload, { transaction });
            await transaction.commit();

            return this.getBookingById(id);
        } catch (error:any) {
            if (transaction) await transaction.rollback();
            if (error instanceof CustomError) throw error;
            console.error("Error updating booking status in service:", error);
            throw new CustomError(`Error actualizando estado de reserva: ${error.message}`, 500);
        }
    }

    public async cancelBooking(id: string, userId: string): Promise<boolean> {
        let transaction: Transaction | undefined;
        try {
            transaction = await sequelize.transaction();
            const bookingInstance = await BookingModel.findByPk(id, { transaction, include: [{model: BookingStatusModel, as: 'status'}] });
            if (!bookingInstance || bookingInstance.get('deleted')) {
                throw new CustomError("Reserva no encontrada.", 404);
            }

            const currentStatus = bookingInstance.get('status') as InstanceType<typeof BookingStatusModel> | undefined;

            if (currentStatus?.get('code') === 'CANCELLED' || currentStatus?.get('code') === 'COMPLETED') {
                 throw new CustomError(`La reserva ya está ${(currentStatus.get('name') as string)?.toLowerCase()} y no se puede cancelar.`, 400);
            }

            const cancelledStatusInstance = await BookingStatusModel.findOne({ where: { code: 'CANCELLED' }, transaction });
            if (!cancelledStatusInstance) {
                throw new CustomError("Estado 'CANCELLED' no encontrado en el sistema.", 500);
            }

            await bookingInstance.update({
                fk_status_id: cancelledStatusInstance.getDataValue('id') as string,
                paymentSuccessful: false,
                fk_updated_by_id: userId,
            }, { transaction });

            await transaction.commit();
            return true;
        } catch (error: any) {
            if (transaction) await transaction.rollback();
            if (error instanceof CustomError) throw error;
            console.error("Error cancelling booking in service:", error);
            throw new CustomError(`Error cancelando la reserva: ${error.message}`, 500);
        }
    }
}
