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
    InstallmentModel,
    InstallmentPlanModel,
    CreditPurchaseModel
} from "@src/models";
import { ISmartBookingRequest, IBookingAttributes, IKiuBookingResponse } from "@src/types/booking.type";
import { CustomError } from "@src/utils/custom-exception.error";
import { KiuService } from "./kiu.service";
import { parse, format, addHours, addDays } from 'date-fns';
import { generateUniqueBookingReference } from "@src/utils/generate-booking-reference";

const kiuService = new KiuService();

const getKiuDocumentTypes = (docTypeCode: string) => {
    switch (docTypeCode) {
        case 'V': return { foid_type: 'ID', document_type: 'I' };
        case 'E': return { foid_type: 'NI', document_type: 'I' };
        case 'P': return { foid_type: 'PP', document_type: 'P' };
        default: return { foid_type: 'ID', document_type: 'I' };
    }
};

const getKiuPassengerCode = (passengerType: string) => {
    const upperType = passengerType.toUpperCase();
    if (upperType.includes('ADULTO')) return 'ADT';
    if (upperType.includes('NIÑO')) return 'CHD';
    if (upperType.includes('INFANTE')) return 'INFT';
    return 'ADT'; // Default to Adult
};

const parseDdmmyy = (dateString: string): Date => {
    const monthMap: { [key: string]: number } = {
        JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5,
        JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11
    };
    const day = parseInt(dateString.substring(0, 2), 10);
    const month = monthMap[dateString.substring(2, 5).toUpperCase()];
    let year = parseInt(dateString.substring(5, 7), 10);
    year += (year > 50) ? 1900 : 2000;
    if (isNaN(day) || month === undefined || isNaN(year)) throw new Error(`Invalid date format: ${dateString}`);
    return new Date(year, month, day);
}

export class BookingService {

    public async createSmartBooking(payload: ISmartBookingRequest, userId: string): Promise<any> {
        console.log('--- Iniciando createSmartBooking ---');
        console.log('Payload recibido:', JSON.stringify(payload, null, 2));

        const transaction = await sequelize.transaction();
        try {
            const auth = await AuthModel.findByPk(userId, { transaction });
            if (!auth) throw new CustomError("Usuario no autenticado o no encontrado.", 404);
            console.log('Usuario autenticado encontrado:', auth.getDataValue('id'));

            const countryIds = [payload.fk_contact_country_id, ...payload.passengers.map(p => p.fk_nationality_country_id), ...payload.passengers.map(p => p.fk_issue_country_id)];
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
                    foid_type: kiuDocs.foid_type,
                    document_type: kiuDocs.document_type,
                    foid_id: p.foid_id,
                    date_of_birth: p.date_of_birth.toUpperCase(),
                    passenger_type_code: getKiuPassengerCode(p.passenger_type_code),
                    nationality: countryMap.get(p.fk_nationality_country_id),
                    issue_country: countryMap.get(p.fk_issue_country_id),
                    expiration_date: p.expiration_date.toUpperCase(),
                    representative: p.representative,
                };
                if (getKiuPassengerCode(p.passenger_type_code) !== 'INFT') delete passenger.representative;
                return passenger;
            });
            console.log('Pasajeros transformados para KIU:', JSON.stringify(kiuPassengers, null, 2));

            const kiuPayload = {
                email: payload.email,
                phone: payload.phone,
                countryCode: countryMap.get(payload.fk_contact_country_id),
                carrier: payload.carrier,
                passengers: kiuPassengers,
                air_itinerary_information: payload.air_itinerary_information,
            };
            console.log('Payload final enviado a KIU:', JSON.stringify(kiuPayload, null, 2));

            const kiuResponse: IKiuBookingResponse = await kiuService.createSmartBooking(kiuPayload);
            console.log('Respuesta de KIU:', JSON.stringify(kiuResponse, null, 2));

            const bookingStatusPending = await BookingStatusModel.findOne({ where: { code: 'PENDING' }, transaction });
            if (!bookingStatusPending) throw new CustomError("Booking status 'PENDING' not found.", 500);

            const firstSegment = payload.air_itinerary_information[0];
            const isRoundTrip = payload.air_itinerary_information.length > 1;
            const lastSegment = isRoundTrip ? payload.air_itinerary_information[payload.air_itinerary_information.length - 1] : null;

            const newBooking = await BookingModel.create({
                contactEmail: payload.email, contactPhone: payload.phone, fk_contact_country_id: payload.fk_contact_country_id,
                fk_auth_id: auth.getDataValue('id'), totalAmount: payload.totalAmount, passengerCount: payload.passengers.length,
                bookingReference: kiuResponse.booking.booking.recordLocator, kiu_response: kiuResponse,
                fk_status_id: bookingStatusPending.getDataValue('id'), departureDate: firstSegment.departure_information.date,
                returnDate: lastSegment ? lastSegment.departure_information.date : null,
                fk_created_by_id: userId, fk_updated_by_id: userId,
            }, { transaction });
            console.log('Booking creado en BD:', newBooking.getDataValue('id'));

            await AirItineraryInformationModel.bulkCreate(payload.air_itinerary_information.map(item => ({
                ...item, fk_booking_id: newBooking.getDataValue('id'), departure_location_code: item.departure_information.location_code,
                departure_date: item.departure_information.date, departure_time: item.departure_information.time,
                arrival_location_code: item.arrival_information.location_code,
            })), { transaction });

            const passengerMap = new Map();
            const createdPassengers = await Promise.all(payload.passengers.map(async (p) => {
                const docTypeId = docTypeIdMap.get(p.document_type);
                if (!docTypeId) throw new CustomError(`Tipo de documento inválido: ${p.document_type}`, 400);

                const dobForDb = format(parseDdmmyy(p.date_of_birth), 'yyyy-MM-dd');

                const newPassenger = await PassengersModel.create({
                    firstSurname: p.surname, firstName: p.name, fk_gender_id: p.fk_gender_id,
                    dateOfBirth: dobForDb,
                    fk_nationality_country_id: p.fk_nationality_country_id,
                    fk_issue_country_id: p.fk_issue_country_id, fk_doc_type_id: docTypeId,
                    documentNumber: p.foid_id, passengerType: getKiuPassengerCode(p.passenger_type_code).toLowerCase(),
                }, { transaction });
                passengerMap.set(p.foid_id, newPassenger.getDataValue('id'));
                return newPassenger;
            }));

            await Promise.all(createdPassengers.map((p, index) => {
                const representativeFoid = payload.passengers[index].representative;
                if (p.getDataValue('passengerType') === 'inft' && representativeFoid) {
                    const adultId = passengerMap.get(representativeFoid);
                    if (adultId) return p.update({ associatedAdultId: adultId }, { transaction });
                }
            }));

            await BookingsPassengersModel.bulkCreate(createdPassengers.map(p => ({
                fk_booking_id: newBooking.getDataValue('id'), fk_passenger_id: p.getDataValue('id'),
            })), { transaction });
            console.log(`${createdPassengers.length} pasajeros creados y asociados.`);

            const installmentPlan = await InstallmentPlanModel.findOne({ where: { installments_count: 1, is_active: true }, transaction });
            if (!installmentPlan) throw new CustomError("Plan de pago por defecto (1 cuota) no encontrado o inactivo.", 500);

            const totalAmount = newBooking.getDataValue('totalAmount');
            const totalWithInterest = totalAmount * (1 + installmentPlan.getDataValue('interest_rate') / 100);

            const creditPurchase = await CreditPurchaseModel.create({
                reservation_id: newBooking.getDataValue('id'),
                installment_plan_id: installmentPlan.getDataValue('id'),
                total_with_interest: totalWithInterest,
                total_paid: 0,
                is_fully_paid: false,
            }, { transaction });

            const installmentsToCreate = [];
            const initialFeeAmount = totalWithInterest * (installmentPlan.getDataValue('initial_fee_percentage') / 100);

            installmentsToCreate.push({
                credit_purchase_id: creditPurchase.getDataValue('id'),
                amount_due: initialFeeAmount,
                due_date: addHours(new Date(), 4),
                status: 'pending',
            });

            const remainingAmount = totalWithInterest - initialFeeAmount;
            const remainingInstallmentsCount = installmentPlan.getDataValue('installments_count') - 1;

            if (remainingInstallmentsCount > 0) {
                const regularInstallmentAmount = remainingAmount / remainingInstallmentsCount;
                let lastDueDate = new Date();
                for (let i = 0; i < remainingInstallmentsCount; i++) {
                    lastDueDate = addDays(lastDueDate, installmentPlan.getDataValue('days_between_installments'));
                    installmentsToCreate.push({
                        credit_purchase_id: creditPurchase.getDataValue('id'),
                        amount_due: regularInstallmentAmount,
                        due_date: lastDueDate,
                        status: 'pending',
                    });
                }
            }

            await InstallmentModel.bulkCreate(installmentsToCreate, { transaction });

            await transaction.commit();

            return newBooking;

        } catch (error: unknown) {
            if (transaction) await transaction.rollback();
            throw error;
        }
    }

    public async getBookingById(id: string, includePassengers: boolean = true): Promise<IBookingAttributes | null> {
        const options: FindOptions = {
            include: [
                { model: BookingStatusModel, as: 'status' },
                { model: AirItineraryInformationModel, as: 'airItineraryInformation' },
                { model: AuthModel, as: 'auth', include: [{ model: UserModel, as: 'user', attributes: ['id', 'email', 'username'] }] },
                { model: UserModel, as: 'createdBy', attributes: ['id', 'username'] },
                { model: UserModel, as: 'updatedBy', attributes: ['id', 'username'] },
            ]
        };

        if (includePassengers) {
            (options.include as any[]).push({
                model: PassengersModel, as: 'passengers', through: { attributes: [] },
                include: [
                    { model: GenderModel, as: 'gender' },
                    { model: CountriesModel, as: 'nationality' },
                    { model: CountriesModel, as: 'issueCountry' },
                    { model: DocumentTypesModel, as: 'documentType' },
                ]
            });
        }

        const bookingInstance = await BookingModel.findByPk(id, options);
        return bookingInstance ? bookingInstance.get({ plain: true }) as IBookingAttributes : null;
    }

    public async getBookingsByAuthId(authId: string, options?: FindOptions<IBookingAttributes>): Promise<{ rows: IBookingAttributes[], count: number }> {
        const defaultOptions: FindOptions<IBookingAttributes> = {
            where: { fk_auth_id: authId, deleted: false },
            include: [{ model: BookingStatusModel, as: 'status', attributes: ['id', 'name', 'code'] }],
            order: [['createdAt', 'DESC']],
        };
        const finalOptions = { ...defaultOptions, ...options };
        if (options?.where) finalOptions.where = { ...defaultOptions.where, ...options.where };
        const { rows, count } = await BookingModel.findAndCountAll(finalOptions);
        return { rows: rows.map(r => r.get({ plain: true }) as IBookingAttributes), count };
    }
    
    public async getAllBookings(options?: FindOptions<IBookingAttributes>): Promise<{ rows: IBookingAttributes[], count: number }> {
        const defaultOptions: FindOptions<IBookingAttributes> = {
            where: { deleted: false },
            include: [
                { model: BookingStatusModel, as: 'status', attributes: ['id', 'name', 'code'] },
                { model: AuthModel, as: 'auth', include: [{model: UserModel, as: 'user', attributes: ['id', 'email', 'username']}] },
            ],
            order: [['createdAt', 'DESC']],
        };
        const finalOptions = { ...defaultOptions, ...options };
        if (options?.where) finalOptions.where = { ...defaultOptions.where, ...options.where };
        const { rows, count } = await BookingModel.findAndCountAll(finalOptions);
        return { rows: rows.map(r => r.get({ plain: true })), count };
    }

    public async updateBookingStatus(id: string, statusId: string, paymentSuccessful: boolean | undefined, userId: string): Promise<void> {
        await sequelize.transaction(async (transaction) => {
            const bookingInstance = await BookingModel.findByPk(id, { transaction });
            if (!bookingInstance || bookingInstance.get('deleted')) throw new CustomError( "Reserva no encontrada.", 404);
            const statusExists = await BookingStatusModel.findByPk(statusId, { transaction });
            if (!statusExists) throw new CustomError("El estado proporcionado no es válido.", 400);
            
            const updatePayload: Partial<IBookingAttributes> = { fk_status_id: statusId, fk_updated_by_id: userId };
            if (paymentSuccessful !== undefined) updatePayload.paymentSuccessful = paymentSuccessful;

            await bookingInstance.update(updatePayload, { transaction });
        });
    }

    public async cancelBooking(id: string, userId: string): Promise<boolean> {
        return sequelize.transaction(async (transaction) => {
            const bookingInstance = await BookingModel.findByPk(id, { transaction, include: [{model: BookingStatusModel, as: 'status'}] });
            if (!bookingInstance || bookingInstance.get('deleted')) throw new CustomError("Reserva no encontrada.", 404);
            const currentStatus = bookingInstance.get('status') as InstanceType<typeof BookingStatusModel> | undefined;
            if (currentStatus?.get('code') === 'CANCELLED' || currentStatus?.get('code') === 'COMPLETED') {
                 throw new CustomError(`La reserva ya está ${(currentStatus.get('name') as string)?.toLowerCase()} y no se puede cancelar.`, 400);
            }
            const cancelledStatusInstance = await BookingStatusModel.findOne({ where: { code: 'CANCELLED' }, transaction });
            if (!cancelledStatusInstance) throw new CustomError("Estado 'CANCELLED' no encontrado en el sistema.", 500);
            await bookingInstance.update({
                fk_status_id: cancelledStatusInstance.getDataValue('id') as string,
                paymentSuccessful: false,
                fk_updated_by_id: userId,
            }, { transaction });
            return true;
        });
    }
}
