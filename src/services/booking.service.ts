import { FindOptions, Transaction } from "sequelize";
import sequelize from "@src/config/connection";
import {
    BookingModel, 
    ClientModel,  
    UserModel,    
    PassengersModel,
    BookingsPassengersModel,
    DestinationsModel, 
    BookingStatusModel, 
    CountriesModel,
    DocumentTypesModel,
    GenderModel
} from "@src/models";
import { ISmartBookingRequest, IBookingAttributes, IBookingUpdatePayload, IBookingServiceCreatePayload, IKiuBookingResponse } from "@src/types/booking.type";
import { IPassengerDataInput } from "@src/types/passenger.type";
import { generateUniqueBookingReference } from "@src/utils/generate-booking-reference"; 
import { CustomError } from "@src/utils/custom-exception.error";
import { KiuService } from "./kiu.service";

const kiuService = new KiuService();

export class BookingService {

    private validatePassengerLogic(passengers: IPassengerDataInput[]): string | null {
        if (passengers.length === 0 || passengers.length > 9) {
            return "Se requiere entre 1 y 9 pasajeros por reserva.";
        }
        const adults = passengers.filter(p => p.passengerType === 'adult');
        const children = passengers.filter(p => p.passengerType === 'child');
        const infants = passengers.filter(p => p.passengerType === 'infant');

        if (adults.length === 0 && (children.length > 0 || infants.length > 0)) {
            return "Se requiere al menos un pasajero adulto si viajan niños o infantes.";
        }
        if (infants.length > adults.length) {
            return "Debe haber al menos un adulto por cada infante.";
        }
        return null;
    }

    public async createSmartBooking(payload: ISmartBookingRequest, userId: string): Promise<IKiuBookingResponse> {
        let transaction: Transaction | undefined;
        try {
            transaction = await sequelize.transaction();

            const kiuPayload = {
                ...payload,
                passengers: payload.passengers.map(p => {
                    if (p.passenger_type_code !== 'INFT') {
                        delete p.representative;
                    }
                    return p;
                }),
                air_itinerary_information: payload.air_itinerary_information.map(item => ({
                    ...item,
                    departure_information: {
                        ...item.departure_information,
                        time: item.departure_information.time.replace(/:/g, '').slice(0, 4)
                    }
                }))
            };

            const kiuResponse: IKiuBookingResponse = await kiuService.createSmartBooking(kiuPayload);

            const bookingData = {
                bookingReference: kiuResponse.booking.booking.recordLocator,
                kiu_response: kiuResponse,
                // ... Mapea el resto de los datos necesarios
            };

            // const newBooking = await BookingModel.create(bookingData, { transaction });

            await transaction.commit();

            const { ...rest } = kiuResponse;

            return { ...rest, data: undefined };

        } catch (error: unknown) {
            if (transaction) await transaction.rollback();
            throw error;
        }
    }

    public async createBooking(
    payload: IBookingServiceCreatePayload, 
    userId: string
): Promise<IBookingAttributes> {
    let transaction: Transaction | undefined;
    try {
        transaction = await sequelize.transaction();

        const bookingReference = payload.bookingReference || await generateUniqueBookingReference();
        
        const createdBooking = await BookingModel.create({
            name: payload.name,
            description: payload.description,
            totalAmount: payload.totalAmount,
            paymentSuccessful: payload.paymentSuccessful,
            bookingReference,
            notes: payload.notes,
            departureDate: payload.departureDate,
            returnDate: payload.returnDate,
            fk_status_id: payload.fk_status_id,
            fk_origin_id: payload.fk_origin_id,
            fk_destination_id: payload.fk_destination_id,
            fk_client_id: payload.fk_client_id,
            passengerCount: payload.passengerCount,
            fk_created_by_id: payload.fk_created_by_id,
            fk_updated_by_id: payload.fk_updated_by_id,
        }, { transaction });

        const bookingPassengersEntries = await Promise.all(
            payload.passengers.map(async (passengerData) => {
                const newPassenger = await PassengersModel.create({
                    firstSurname: passengerData.firstSurname,
                    firstName: passengerData.firstName,
                    middleName: passengerData.middleName,
                    secondSurname: passengerData.secondSurname,
                    fk_gender_id: passengerData.fk_gender_id,
                    dateOfBirth: passengerData.dateOfBirth,
                    fk_nationality_country_id: passengerData.fk_nationality_country_id,
                    fk_doc_type_id: passengerData.fk_doc_type_id,
                    documentNumber: passengerData.documentNumber,
                    passengerType: passengerData.passengerType,
                    associatedAdultId: passengerData.associatedAdultId,
                }, { transaction });

                return {
                    fk_booking_id: createdBooking.getDataValue('id'),
                    fk_passenger_id: newPassenger.getDataValue('id')
                };
            })
        );

        await BookingsPassengersModel.bulkCreate(bookingPassengersEntries, { transaction });
        await transaction.commit();

        const result = await this.getBookingById(createdBooking.getDataValue('id'));
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
                { model: DestinationsModel, as: 'origin' },
                { model: DestinationsModel, as: 'destination' },
                { model: ClientModel, as: 'client', include: [{ model: UserModel, as: 'user', attributes: ['id', 'email', 'username'] }] },
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

    public async getBookingsByClientId(clientId: string, options?: FindOptions<IBookingAttributes>): Promise<{ rows: IBookingAttributes[], count: number }> {
        try {
            const defaultOptions: FindOptions<IBookingAttributes> = {
                where: { fk_client_id: clientId, deleted: false },
                include: [
                    { model: BookingStatusModel, as: 'status', attributes: ['id', 'name', 'code'] },
                    { model: DestinationsModel, as: 'destination', attributes: ['id', 'name', 'code'] },
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
            console.error("Error fetching bookings by client ID in service:", error);
            throw new CustomError(`Error obteniendo reservas del cliente: ${error.message}`, 500);
        }
    }
    
    public async getAllBookings(options?: FindOptions<IBookingAttributes>): Promise<{ rows: IBookingAttributes[], count: number }> {
        try {
            const defaultOptions: FindOptions<IBookingAttributes> = {
                where: { deleted: false },
                 include: [
                    { model: BookingStatusModel, as: 'status', attributes: ['id', 'name', 'code'] },
                    { model: DestinationsModel, as: 'destination', attributes: ['id', 'name', 'code'] },
                    { model: ClientModel, as: 'client', include: [{model: UserModel, as: 'user', attributes: ['id', 'email', 'username']}] },
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


    public async updateBooking(id: string, payload: IBookingUpdatePayload, userId: string): Promise<IBookingAttributes | null> {
        let transaction: Transaction | undefined;
        try {
            transaction = await sequelize.transaction();
            const bookingInstance = await BookingModel.findByPk(id, { transaction });
            if (!bookingInstance || bookingInstance.get('deleted')) {
                throw new CustomError( "Reserva no encontrada o ha sido eliminada.", 404);
            }

            const updateData: Partial<IBookingAttributes> & { fk_updated_by_id: string } = {
                name: payload.name,
                description: payload.description,
                totalAmount: payload.totalAmount,
                paymentSuccessful: payload.paymentSuccessful,
                notes: payload.notes,
                departureDate: payload.departureDate ? new Date(payload.departureDate) : undefined,
                returnDate: payload.returnDate ? new Date(payload.returnDate) : undefined,
                fk_status_id: payload.fk_status_id,
                fk_origin_id: payload.fk_origin_id,
                fk_destination_id: payload.fk_destination_id,
                fk_updated_by_id: userId,
            };
            Object.keys(updateData).forEach(key => updateData[key as keyof typeof updateData] === undefined && delete updateData[key as keyof typeof updateData]);


            if (updateData.fk_status_id) {
                const statusExists = await BookingStatusModel.findByPk(payload.fk_status_id, { transaction });
                if (!statusExists) {
                    throw new CustomError("El estado proporcionado no es válido.", 400);
                }
            }
            
            await bookingInstance.update(updateData, { transaction });
            await transaction.commit();
            
            const result = await this.getBookingById(id);
            if (!result) throw new CustomError("Error fetching updated booking details.", 500); 
            return result;

        } catch (error: any) {
            if (transaction) await transaction.rollback();
            if (error instanceof CustomError) throw error;
            console.error("Error updating booking in service:", error);
            throw new CustomError(`Error actualizando reserva: ${error.message}`, 500);
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
                fk_status_id: cancelledStatusInstance.get('id') as string,
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
    
    public async deleteBooking(id: string, userId: string): Promise<boolean> {
        try {
            const bookingInstance = await BookingModel.findByPk(id);
            if (!bookingInstance || bookingInstance.get('deleted')) {
                 throw new CustomError("Reserva no encontrada.", 404);
            }

            await bookingInstance.update({ deleted: true, fk_updated_by_id: userId });
            return true;
        } catch (error: any) {
            if (error instanceof CustomError) throw error;
            console.error("Error deleting booking in service:", error);
            throw new CustomError(`Error eliminando la reserva: ${error.message}`, 500);
        }
    }
}
