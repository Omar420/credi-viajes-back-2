import { Request, Response } from "express";
import { Transaction } from "sequelize";
import sequelize from "@src/config/connection";
import {
    BookingService, 
    ClientService,  
    PassengerService, 
    BookingPassengersService 
} from "@src/services";
import { 
    ClientModel, 
    BookingStatusModel, 
    DestinationsModel, 
    UserModel, 
    CountriesModel, 
    DocumentTypesModel, 
    GenderModel, 
    PassengersModel, 
    BookingModel
} from "@src/models";
import { ERROR_MESSAGES, SUCCESS_MESSAGES, INFO_MESSAGES } from "@src/constants/messages.global";
import { IBookingCreationPayload, IBookingAttributes, IBookingUpdatePayload, IBookingServiceCreatePayload } from "@src/types/booking.type";
import { IPassengerDataInput, IPassengerCreationAttributes, IPassengerAttributes } from "@src/types/passenger.type";
import { CustomError } from "@src/utils/custom-exception.error";
import { AuthenticatedRequest } from "@src/types";
import { ROLES } from "@src/constants/config-global";

const bookingService = new BookingService();
const clientService = new ClientService();
const passengerService = new PassengerService();
const bookingPassengersService = new BookingPassengersService();

const validatePassengerLogic = (passengers: IPassengerDataInput[]): string | null => {
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
};

export const createBooking = async (req: AuthenticatedRequest, res: Response) => {
    const payload = req.body as IBookingCreationPayload;
    const userId = req.uid; // Cambiado a req.uid

    if (!userId) {
        return res.status(401).json({ message: ERROR_MESSAGES.ERROR_UNAUTHORIZED_ACCESS });
    }

    let transaction: Transaction | undefined;
    try {
        transaction = await sequelize.transaction();

        const clientRecord = await ClientModel.findOne({ 
            where: { fk_user_id: userId }, 
            transaction 
        });
        
        if (!clientRecord) {
            throw new CustomError("Cliente asociado al usuario no encontrado.", 400);
        }
        const clientId = clientRecord.get('id') as string;

        const passengerLogicError = validatePassengerLogic(payload.passengers);
        if (passengerLogicError) {
            throw new CustomError(passengerLogicError, 400);
        }

        const bookingData: IBookingServiceCreatePayload = {
            ...payload,
            fk_client_id: clientId,
            passengerCount: payload.passengers.length,
            fk_created_by_id: userId,
            fk_updated_by_id: userId,
        };

        const newBookingEntity = await bookingService.createBooking(bookingData, userId);

        await transaction.commit();

        const result = await bookingService.getBookingById(newBookingEntity.id);

        return res.status(201).json({
            message: SUCCESS_MESSAGES.SUCCESS_RESOURCE_CREATED,
            data: result,
        });

    } catch (error: any) {
        if (transaction) await transaction.rollback();
        console.error("Error creating booking:", error);
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ message: error.message, errors: error });
        }
        return res.status(500).json({ 
            message: ERROR_MESSAGES.ERROR_INTERNAL_SERVER, 
            errorDetails: error.message 
        });
    }
};

export const getBookingById = async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.params;
    const userId = req.uid; // Cambiado a req.uid
    const roleCode = req.roleCode;

    if (!userId) { 
        return res.status(401).json({ message: ERROR_MESSAGES.ERROR_UNAUTHORIZED_ACCESS });
    }

    try {
        const booking = await bookingService.getBookingById(id); 

        if (!booking) {
            return res.status(404).json({ message: ERROR_MESSAGES.ERROR_RESOURCE_NOT_FOUND });
        }

        const clientRecord = await ClientModel.findOne({ 
            where: { fk_user_id: userId } 
        });
        
        const isAdmin = roleCode === ROLES.ADMIN || roleCode === ROLES.SUPERADMIN;

        if (!isAdmin && 
            booking.fk_client_id !== clientRecord?.get('id') && 
            booking.fk_created_by_id !== userId) {
            return res.status(403).json({ message: ERROR_MESSAGES.ERROR_FORBIDDEN_ACCESS });
        }
        
        return res.status(200).json({
            message: SUCCESS_MESSAGES.SUCCESS_OPERATION,
            data: booking, 
        });
    } catch (error: any) {
        console.error("Error fetching booking by ID:", error);
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ message: error.message, errors: error });
        }
        return res.status(500).json({ 
            message: ERROR_MESSAGES.ERROR_INTERNAL_SERVER, 
            errorDetails: error.message 
        });
    }
};

export const getUserBookings = async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.uid; // Cambiado a req.uid

    if (!userId) {
        return res.status(401).json({ message: ERROR_MESSAGES.ERROR_UNAUTHORIZED_ACCESS });
    }
    
    try {
        const client = await clientService.findClientByAuthId(userId); 
        if (!client) { 
             return res.status(200).json({ 
                 message: INFO_MESSAGES.NO_RECORDS_FOUND, 
                 data: [] 
             });
        }

        const { rows, count } = await bookingService.getBookingsByClientId(
            client.get('id') as string
        );

        if (count === 0) {
            return res.status(200).json({ 
                message: INFO_MESSAGES.NO_RECORDS_FOUND, 
                data: [] 
            });
        }
        return res.status(200).json({
            message: SUCCESS_MESSAGES.SUCCESS_OPERATION,
            data: rows,
            meta: { totalItems: count }
        });
    } catch (error: any) {
        console.error("Error fetching user bookings:", error);
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ 
                message: error.message, 
                errors: error 
            });
        }
        return res.status(500).json({ 
            message: ERROR_MESSAGES.ERROR_INTERNAL_SERVER, 
            errorDetails: error.message 
        });
    }
};

export const getAllBookings = async (req: AuthenticatedRequest, res: Response) => {
    const roleCode = req.roleCode;

    // Verificar si es admin
    if (roleCode !== ROLES.ADMIN && roleCode !== ROLES.SUPERADMIN) {
        return res.status(403).json({ 
            message: ERROR_MESSAGES.ERROR_FORBIDDEN_ACCESS 
        });
    }

    try {
        const { rows, count } = await bookingService.getAllBookings();
        return res.status(200).json({
            message: SUCCESS_MESSAGES.SUCCESS_OPERATION,
            data: rows,
            meta: { totalItems: count }
        });
    } catch (error: any) {
        console.error("Error fetching all bookings:", error);
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ 
                message: error.message, 
                errors: error 
            });
        }
        return res.status(500).json({ 
            message: ERROR_MESSAGES.ERROR_INTERNAL_SERVER, 
            errorDetails: error.message 
        });
    }
};

export const updateBookingStatus = async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.params;
    const { fk_status_id, paymentSuccessful } = req.body as { 
        fk_status_id?: string, 
        paymentSuccessful?: boolean
    };
    const userId = req.uid; // Cambiado a req.uid
    const roleCode = req.roleCode;

    if (!userId) {
        return res.status(401).json({ message: ERROR_MESSAGES.ERROR_UNAUTHORIZED_ACCESS });
    }
    
    try {
        const updatedBooking = await bookingService.updateBookingStatus(
            id, 
            fk_status_id!, 
            paymentSuccessful, 
            userId
        );
        
        if (!updatedBooking) { 
            return res.status(404).json({ 
                message: ERROR_MESSAGES.ERROR_RESOURCE_NOT_FOUND 
            });
        }
        return res.status(200).json({
            message: SUCCESS_MESSAGES.SUCCESS_RESOURCE_UPDATED,
            data: updatedBooking
        });
    } catch (error: any) {
        console.error("Error updating booking status:", error);
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ 
                message: error.message, 
                errors: error 
            });
        }
        return res.status(500).json({ 
            message: ERROR_MESSAGES.ERROR_INTERNAL_SERVER, 
            errorDetails: error.message 
        });
    }
};

export const cancelBooking = async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.params;
    const userId = req.uid; // Cambiado a req.uid

    if (!userId) {
        return res.status(401).json({ message: ERROR_MESSAGES.ERROR_UNAUTHORIZED_ACCESS });
    }

    try {
        await bookingService.cancelBooking(id, userId);
        return res.status(200).json({ 
            message: "Reserva cancelada exitosamente." 
        }); 
    } catch (error: any) {
        console.error("Error cancelling booking:", error);
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ 
                message: error.message, 
                errors: error 
            });
        }
        return res.status(500).json({ 
            message: ERROR_MESSAGES.ERROR_INTERNAL_SERVER, 
            errorDetails: error.message 
        });
    }
};