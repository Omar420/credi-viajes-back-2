import { FindOptions } from "sequelize";
import {
    PassengersModel, // Corrected: Plural
    GenderModel,
    CountriesModel,
    DocumentTypesModel,
    ClientModel,
    BookingsPassengersModel, // For checking active bookings
    BookingModel // For checking active bookings
} from "@src/models";
import { IPassengerAttributes, IPassengerCreationAttributes } from "@src/types/passenger.type";
import { CustomError } from "@src/utils/custom-exception.error";

export class PassengerService {

    public async createPassenger(data: IPassengerCreationAttributes): Promise<IPassengerAttributes> {
        try {
            // Validate foreign keys
            if (data.fk_gender_id) {
                const gender = await GenderModel.findByPk(data.fk_gender_id);
                // GenderModel does not have 'deleted'
                if (!gender) throw new CustomError("Invalid Gender ID.", 400);
            }
            if (data.fk_nationality_country_id) {
                const country = await CountriesModel.findByPk(data.fk_nationality_country_id);
                // CountriesModel does not have 'deleted'
                if (!country) throw new CustomError("Invalid Nationality Country ID.", 400);
            }
            if (data.fk_doc_type_id) {
                const docType = await DocumentTypesModel.findByPk(data.fk_doc_type_id);
                // DocumentTypesModel does not have 'deleted'
                if (!docType) throw new CustomError("Invalid Document Type ID.", 400);
            }
            if (data.fk_client_id) { // fk_client_id is now on Passenger model
                const client = await ClientModel.findByPk(data.fk_client_id);
                if (!client || client.get('deleted')) throw new CustomError("Invalid Client ID for passenger association.", 400);
            }

            const newPassenger = await PassengersModel.create(data); // Corrected model name
            const fetchedPassenger = await this.getPassengerById(newPassenger.get('id') as string);
            if (!fetchedPassenger) throw new CustomError("Failed to fetch created passenger with details.", 500);
            return fetchedPassenger;
        } catch (error: any) {
            if (error instanceof CustomError) throw error;
            console.error("Error creating passenger in service:", error);
            throw new CustomError(`Error creating passenger: ${error.message}`, 500);
        }
    }

    public async getPassengerById(id: string): Promise<IPassengerAttributes | null> {
        try {
            const passenger = await PassengersModel.findOne({ // Corrected model name
                where: { id, deleted: false },
                include: [
                    { model: GenderModel, as: 'gender', required: false },
                    { model: CountriesModel, as: 'nationality', required: false },
                    { model: DocumentTypesModel, as: 'documentType', required: false },
                    { model: ClientModel, as: 'client', required: false } 
                ]
            });
            return passenger ? passenger.get({ plain: true }) as IPassengerAttributes : null;
        } catch (error: any) {
            console.error("Error fetching passenger by ID in service:", error);
            throw new CustomError(`Error fetching passenger: ${error.message}`, 500);
        }
    }

    public async getAllPassengers(options?: FindOptions<IPassengerAttributes>): Promise<{ rows: IPassengerAttributes[], count: number }> {
        try {
            const defaultOptions: FindOptions<IPassengerAttributes> = {
                where: { deleted: false },
                include: [
                    { model: GenderModel, as: 'gender', required: false },
                    { model: CountriesModel, as: 'nationality', required: false },
                    { model: DocumentTypesModel, as: 'documentType', required: false },
                    { model: ClientModel, as: 'client', required: false }
                ],
                order: [['firstSurname', 'ASC'], ['firstName', 'ASC']], // Corrected from lastName
            };
            const finalOptions = { ...defaultOptions, ...options };
            if(options?.where) {
                finalOptions.where = { ...defaultOptions.where, ...options.where };
            }

            const { rows, count } = await PassengersModel.findAndCountAll(finalOptions); // Corrected model name
            return { rows: rows.map(r => r.get({ plain: true }) as IPassengerAttributes), count };
        } catch (error: any) {
            console.error("Error fetching all passengers in service:", error);
            throw new CustomError(`Error fetching passengers: ${error.message}`, 500);
        }
    }

    public async updatePassenger(id: string, data: Partial<IPassengerCreationAttributes>): Promise<IPassengerAttributes | null> {
        try {
            const passenger = await PassengersModel.findOne({ where: { id, deleted: false } }); // Corrected
            if (!passenger) {
                throw new CustomError("Passenger not found.", 404);
            }

            if (data.fk_gender_id && data.fk_gender_id !== passenger.get('fk_gender_id')) {
                const gender = await GenderModel.findByPk(data.fk_gender_id);
                if (!gender) throw new CustomError("Invalid Gender ID for update.", 400);
            }
            if (data.fk_nationality_country_id && data.fk_nationality_country_id !== passenger.get('fk_nationality_country_id')) {
                const country = await CountriesModel.findByPk(data.fk_nationality_country_id);
                if (!country) throw new CustomError("Invalid Nationality ID for update.", 400);
            }
            if (data.fk_doc_type_id && data.fk_doc_type_id !== passenger.get('fk_doc_type_id')) {
                const docType = await DocumentTypesModel.findByPk(data.fk_doc_type_id);
                if (!docType) throw new CustomError("Invalid Document Type ID for update.", 400);
            }
            if (data.fk_client_id && data.fk_client_id !== passenger.get('fk_client_id')) {
                const client = await ClientModel.findByPk(data.fk_client_id);
                if (!client || client.get('deleted')) throw new CustomError("Invalid Client ID for update.", 400);
            }

            await passenger.update(data);
            const updatedPassenger = await this.getPassengerById(id);
            if(!updatedPassenger) throw new CustomError("Failed to fetch updated passenger.", 500);
            return updatedPassenger;
        } catch (error: any) {
            if (error instanceof CustomError) throw error;
            console.error("Error updating passenger in service:", error);
            throw new CustomError(`Error updating passenger: ${error.message}`, 500);
        }
    }

    public async deletePassenger(id: string): Promise<boolean> {
        try {
            const passenger = await PassengersModel.findOne({ where: { id, deleted: false } }); // Corrected
            if (!passenger) {
                throw new CustomError("Passenger not found.", 404);
            }

            const activeBookings = await BookingsPassengersModel.count({ // Corrected model name
               where: { fk_passenger_id: id },
               include: [{ model: BookingModel, as: 'bookingDetails', where: { deleted: false }, required: true }]
            });
            if (activeBookings > 0) {
               throw new CustomError(`Cannot delete passenger as they are part of ${activeBookings} active booking(s). Please remove them from bookings first.`, 400);
            }
            
            await passenger.update({ deleted: true });
            return true;
        } catch (error: any) {
            if (error instanceof CustomError) throw error;
            console.error("Error deleting passenger in service:", error);
            throw new CustomError(`Error deleting passenger: ${error.message}`, 500);
        }
    }
}
