import { Response } from "express";
import { PaymentService } from "@src/services";
import { AuthenticatedRequest } from "@src/types";
import { CustomError } from "@src/utils/custom-exception.error";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "@src/constants/messages.global";
import { BookingService } from "@src/services/booking.service";
import { CreditPurchaseModel, InstallmentModel } from "@src/models";
import { ROLES } from "@src/constants/config-global";

const paymentService = new PaymentService();
const bookingService = new BookingService();

export const createPayment = async (req: AuthenticatedRequest, res: Response) => {
    const payload = req.body;
    const userId = req.uid;

    if (!userId) {
        return res.status(401).json({ message: ERROR_MESSAGES.ERROR_UNAUTHORIZED_ACCESS });
    }

    try {
        const result = await paymentService.createPayment(payload, userId);
        return res.status(201).json({
            message: "Pago procesado exitosamente.",
            data: result
        });
    } catch (error: any) {
        console.error("Error creating payment:", error);
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ message: error.message, errors: error.getErrors() });
        }
        return res.status(500).json({
            message: ERROR_MESSAGES.ERROR_INTERNAL_SERVER,
            errorDetails: error.message
        });
    }
};

export const getInstallmentsForBooking = async (req: AuthenticatedRequest, res: Response) => {
    const { bookingId } = req.params;
    const userId = req.uid;
    const roleCode = req.roleCode;

    if (!userId) {
        return res.status(401).json({ message: ERROR_MESSAGES.ERROR_UNAUTHORIZED_ACCESS });
    }

    try {
        const booking = await bookingService.getBookingById(bookingId);
        if (!booking) {
            return res.status(404).json({ message: "Reserva no encontrada." });
        }

        const isAdmin = roleCode === ROLES.ADMIN || roleCode === ROLES.SUPERADMIN;

        if (!isAdmin && booking.fk_auth_id !== userId) {
            return res.status(403).json({ message: ERROR_MESSAGES.ERROR_FORBIDDEN_ACCESS });
        }

        const creditPurchase = await CreditPurchaseModel.findOne({ where: { reservation_id: bookingId } });
        if (!creditPurchase) {
            return res.status(404).json({ message: "No se encontró un plan de crédito para esta reserva." });
        }

        const installments = await InstallmentModel.findAll({
            where: { credit_purchase_id: creditPurchase.getDataValue('id') },
            order: [['due_date', 'ASC']]
        });

        return res.status(200).json({
            message: SUCCESS_MESSAGES.SUCCESS_OPERATION,
            data: installments
        });

    } catch (error: any) {
        console.error("Error fetching installments:", error);
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ message: error.message, errors: error.getErrors() });
        }
        return res.status(500).json({
            message: ERROR_MESSAGES.ERROR_INTERNAL_SERVER,
            errorDetails: error.message
        });
    }
};
