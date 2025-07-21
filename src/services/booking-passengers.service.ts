import { FindOptions, Transaction } from "sequelize";
import sequelize from "@src/config/connection";
import {
    // Corrected model imports based on how they are exported from src/models/.../index.ts
    BookingsPassengersModel, // Note: plural 'Bookings'
    BookingModel,
    PassengersModel, // Note: plural 'Passengers'
    GenderModel,
    CountriesModel,
    DocumentTypesModel,
    BookingStatusModel, // Added for include in getBookingsByPassengerId
    DestinationsModel // Added for include in getBookingsByPassengerId
} from "@src/models";
import { IBookingAttributes, IBookingPassengersAttributes, IBookingPassengersCreationAttributes, } from "@src/types"; // For populated details
import { CustomError } from "@src/utils/custom-exception.error";

export class BookingPassengersService {

    public async addPassengerToBooking(data: IBookingPassengersCreationAttributes): Promise<IBookingPassengersAttributes> {
        let transaction: Transaction | undefined;
        try {
            transaction = await sequelize.transaction();

            const { fk_booking_id, fk_passenger_id } = data;

            const booking = await BookingModel.findByPk(fk_booking_id, { transaction });
            if (!booking || booking.get('deleted')) { // Use .get('attribute')
                throw new CustomError("Booking not found or has been deleted.", 404);
            }

            const passenger = await PassengersModel.findByPk(fk_passenger_id, { transaction }); // Corrected model name
            if (!passenger || passenger.get('deleted')) { // Use .get('attribute')
                throw new CustomError("Passenger not found or has been deleted.", 404);
            }

            const existingLink = await BookingsPassengersModel.findOne({ // Corrected model name
                where: { fk_booking_id, fk_passenger_id },
                transaction
            });
            if (existingLink) {
                throw new CustomError("This passenger is already associated with this booking.", 409);
            }

            const newLink = await BookingsPassengersModel.create(data, { transaction }); // Corrected model name
            await transaction.commit();
            // Cast to ensure the return type matches the promise
            return newLink.get({ plain: true }) as IBookingPassengersAttributes;

        } catch (error: any) {
            if (transaction) await transaction.rollback();
            if (error instanceof CustomError) throw error;
            console.error("Error adding passenger to booking in service:", error);
            throw new CustomError(`Error adding passenger to booking: ${error.message}`, 500);
        }
    }

    public async getPassengersByBookingId(bookingId: string): Promise<IBookingPassengersAttributes[]> {
        try {
            const links = await BookingsPassengersModel.findAll({ // Corrected model name
                where: { fk_booking_id: bookingId },
                include: [
                    {
                        model: PassengersModel, // Corrected model name
                        as: 'passengerDetails', 
                        where: { deleted: false }, // Assuming PassengerModel has 'deleted'
                        required: true,
                        include: [ 
                            { model: GenderModel, as: 'gender' },
                            { model: CountriesModel, as: 'nationality' },
                            { model: DocumentTypesModel, as: 'documentType' },
                        ]
                    }
                ]
            });
            return links.map(link => link.get({ plain: true }) as IBookingPassengersAttributes);
        } catch (error: any) {
            console.error("Error fetching passengers for booking in service:", error);
            throw new CustomError(`Error fetching passengers for booking: ${error.message}`, 500);
        }
    }
    
    public async getBookingsByPassengerId(passengerId: string): Promise<IBookingPassengersAttributes[]> {
        try {
            const links = await BookingsPassengersModel.findAll({ // Corrected model name
                where: { fk_passenger_id: passengerId },
                include: [
                    {
                        model: BookingModel,
                        as: 'bookingDetails', 
                         where: { deleted: false }, // Assuming BookingModel has 'deleted'
                        required: true,
                         include: [ // These associations must be defined on BookingModel
                            { model: BookingStatusModel, as: 'status' },
                            { model: DestinationsModel, as: 'destination' }, // Assuming 'destination' alias for fk_destination_id
                         ]
                    }
                ]
            });
            return links.map(link => link.get({ plain: true }) as IBookingPassengersAttributes);
        } catch (error: any) {
            console.error("Error fetching bookings for passenger in service:", error);
            throw new CustomError(`Error fetching bookings for passenger: ${error.message}`, 500);
        }
    }


    public async removePassengerFromBooking(bookingId: string, passengerId: string): Promise<boolean> {
        let transaction: Transaction | undefined;
        try {
            transaction = await sequelize.transaction();
            const link = await BookingsPassengersModel.findOne({ // Corrected model name
                where: {
                    fk_booking_id: bookingId,
                    fk_passenger_id: passengerId
                },
                transaction
            });

            if (!link) {
                throw new CustomError("Booking-passenger association not found.", 404);
            }

            await link.destroy({ transaction });
            await transaction.commit();
            return true;

        } catch (error: any) {
            if (transaction) await transaction.rollback();
            if (error instanceof CustomError) throw error;
            console.error("Error removing passenger from booking in service:", error);
            throw new CustomError(`Error removing passenger from booking: ${error.message}`, 500);
        }
    }
    
    public async getBookingPassengerLinkById(id: string): Promise<IBookingPassengersAttributes | null> {
        try {
            const link = await BookingsPassengersModel.findByPk(id, {
                include: [
                     {
                        model: PassengersModel,
                        as: 'passengerDetails',
                        include: [
                            { model: GenderModel, as: 'gender' },
                            { model: CountriesModel, as: 'nationality' },
                            { model: DocumentTypesModel, as: 'documentType' },
                        ]
                    },
                    { model: BookingModel, as: 'bookingDetails' }
                ]
            });
            return link ? link.get({ plain: true }) : null;
        } catch (error: any) {
            console.error("Error fetching booking-passenger link by ID:", error);
            throw new CustomError(`Error fetching link: ${error.message}`, 500);
        }
    }

    // If the join table itself has attributes to update (e.g., seat_number, special_requests)
    public async updateBookingPassengerLink(id: string, data: Partial<IBookingPassengersAttributes>): Promise<IBookingPassengersAttributes | null> {
        let transaction: Transaction | undefined;
        try {
            transaction = await sequelize.transaction();
            const link = await BookingsPassengersModel.findByPk(id, { transaction });

            if (!link) {
                throw new CustomError("Booking-passenger association not found.", 404);
            }
            
            // Remove foreign keys from data to prevent accidental update
            delete data.fk_booking_id;
            delete data.fk_passenger_id;

            if (Object.keys(data).length === 0) {
                throw new CustomError("No update data provided for the link.", 400)
            }

            await link.update(data, { transaction });
            await transaction.commit();
            return this.getBookingPassengerLinkById(id); // Re-fetch with includes

        } catch (error: any) {
            if (transaction) await transaction.rollback();
            if (error instanceof CustomError) throw error;
            console.error("Error updating booking-passenger link in service:", error);
            throw new CustomError(`Error updating link: ${error.message}`, 500);
        }
    }
}
