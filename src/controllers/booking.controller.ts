import { Response } from "express";
import { BookingService } from "@src/services";
import { AuthModel } from "@src/models";
import { ERROR_MESSAGES, SUCCESS_MESSAGES, INFO_MESSAGES } from "@src/constants/messages.global";
import { ISmartBookingRequest } from "@src/types/booking.type";
import { CustomError } from "@src/utils/custom-exception.error";
import { AuthenticatedRequest } from "@src/types";
import { ROLES } from "@src/constants/config-global";

const bookingService = new BookingService();

export const createSmartBooking = async (req: AuthenticatedRequest, res: Response) => {
    const payload = req.body as ISmartBookingRequest;

    const { email } = payload;
    if (!email) {
        return res.status(400).json({ message: "El email del cliente es requerido en el cuerpo de la solicitud." });
    }

    try {
        const authUser = await AuthModel.findOne({ where: { email } });
        if (!authUser) {
            return res.status(404).json({ message: `Usuario con email ${email} no encontrado.` });
        }
        const userId = authUser.getDataValue('id');

        const newBooking = await bookingService.createSmartBooking(payload, userId);

        // Fetch the full booking details to return to the user
        const result = await bookingService.getBookingById(newBooking.id);

        return res.status(201).json({
            message: SUCCESS_MESSAGES.SUCCESS_RESOURCE_CREATED,
            data: result,
        });

    } catch (error: any) {
        console.error("Error creating smart booking:", error);
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ message: error.message, errors: error.getErrors() });
        }
        return res.status(500).json({
            message: ERROR_MESSAGES.ERROR_INTERNAL_SERVER,
            errorDetails: error.message
        });
    }
};

export const getBookingById = async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.params;
    const userId = req.uid;
    const roleCode = req.roleCode;

    if (!userId) { 
        return res.status(401).json({ message: ERROR_MESSAGES.ERROR_UNAUTHORIZED_ACCESS });
    }

    try {
        const booking = await bookingService.getBookingById(id); 

        if (!booking) {
            return res.status(404).json({ message: ERROR_MESSAGES.ERROR_RESOURCE_NOT_FOUND });
        }
        
        const isAdmin = roleCode === ROLES.ADMIN || roleCode === ROLES.SUPERADMIN;

        if (!isAdmin && booking.fk_auth_id !== userId) {
            return res.status(403).json({ message: ERROR_MESSAGES.ERROR_FORBIDDEN_ACCESS });
        }
        
        return res.status(200).json({
            message: SUCCESS_MESSAGES.SUCCESS_OPERATION,
            data: booking, 
        });
    } catch (error: any) {
        console.error("Error fetching booking by ID:", error);
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ message: error.message, errors: error.getErrors() });
        }
        return res.status(500).json({ 
            message: ERROR_MESSAGES.ERROR_INTERNAL_SERVER, 
            errorDetails: error.message 
        });
    }
};

export const getUserBookings = async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.uid;

    if (!userId) {
        return res.status(401).json({ message: ERROR_MESSAGES.ERROR_UNAUTHORIZED_ACCESS });
    }
    
    try {
        const { rows, count } = await bookingService.getBookingsByAuthId(userId);

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
                errors: error.getErrors()
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
                errors: error.getErrors()
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
    const userId = req.uid;

    if (!userId) {
        return res.status(401).json({ message: ERROR_MESSAGES.ERROR_UNAUTHORIZED_ACCESS });
    }
    
    try {
        await bookingService.updateBookingStatus(
            id, 
            fk_status_id!, 
            paymentSuccessful, 
            userId
        );
        
        return res.status(200).json({
            message: SUCCESS_MESSAGES.SUCCESS_RESOURCE_UPDATED
        });
    } catch (error: any) {
        console.error("Error updating booking status:", error);
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ 
                message: error.message, 
                errors: error.getErrors()
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
    const userId = req.uid;

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
                errors: error.getErrors()
            });
        }
        return res.status(500).json({ 
            message: ERROR_MESSAGES.ERROR_INTERNAL_SERVER, 
            errorDetails: error.message 
        });
    }
};