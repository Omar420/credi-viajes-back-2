import { Request, Response } from "express";
import { Transaction } from "sequelize";
import sequelize from "@src/config/connection";
import {
    BookingModel,
    PassengerModel,
    BookingPassengersModel,
    DestinationsModel,
    BookingStatusModel,
    ClientModel, // Asumiendo que el usuario logueado tiene un ClientModel asociado
    UserModel,
    CountriesModel,
    DocumentTypesModel,
    GenderModel
} from "@src/models";
import { CustomException } from "@src/utils";
import { ERROR_MESSAGES, SUCCESS_MESSAGES, INFO_MESSAGES } from "@src/constants/messages.global";
import { AuthenticatedRequest } from "@src/types/custom-request";
import { IBookingCreationPayload, IBookingDetails, IBookingUpdatePayload } from "@src/types/booking.type";
import { IPassengerData } from "@src/types/passenger.type";
import { generateUniqueBookingReference } from "@src/utils/generate-booking-reference"; // Se necesitará crear esta utilidad

// Helper para validar la lógica de negocio de pasajeros
const validatePassengerLogic = (passengers: IPassengerData[]): string | null => {
    if (passengers.length === 0 || passengers.length > 9) {
        return "Se requiere entre 1 y 9 pasajeros por reserva.";
    }

    const adults = passengers.filter(p => p.passengerType === 'adult');
    const children = passengers.filter(p => p.passengerType === 'child');
    const infants = passengers.filter(p => p.passengerType === 'infant');

    if (adults.length === 0 && (children.length > 0 || infants.length > 0)) {
        return "Se requiere al menos un pasajero adulto si viajan niños o infantes.";
    }

    let adultIndex = 0;
    for (const infant of infants) {
        if (!infant.associatedAdultId) { // En la creación, no tendremos ID de adulto aún.
                                      // Esta lógica se simplifica si el front envía un índice o un ID temporal.
                                      // Por ahora, asumimos que el front garantiza la asociación o la lógica es más compleja.
                                      // Para una validación más robusta aquí, se necesitaría identificar al adulto.
                                      // Esta validación es más para la *cantidad* de adultos vs infantes.
        }
    }
    if (infants.length > adults.length) {
        return "Debe haber al menos un adulto por cada infante.";
    }
    
    // Otras validaciones (ej. edad vs tipo de pasajero) podrían ir aquí si dateOfBirth se usa.

    return null;
};


export const createBooking = async (req: AuthenticatedRequest, res: Response) => {
    const { passengers: passengerDataList, ...bookingData } = req.body as IBookingCreationPayload;
    const loggedInUser = req.user; // Viene de validateJWT

    if (!loggedInUser || !loggedInUser.id) {
        return res.status(401).json({ message: ERROR_MESSAGES.ERROR_UNAUTHORIZED_ACCESS });
    }
    // Asumimos que el AuthenticatedRequest.user tiene el ID del UserModel
    // y que existe un ClientModel asociado a este UserModel.
    // Esta lógica puede necesitar ajuste basado en cómo se vincula User a Client.
    let clientRecord;
    try {
        clientRecord = await ClientModel.findOne({ where: { fk_user_id: loggedInUser.id } });
        if (!clientRecord) {
            // O manejar la creación de un Client si es el flujo esperado
            return res.status(400).json({ message: "Cliente asociado al usuario no encontrado." }); 
        }
    } catch (error) {
        console.error("Error finding client for user:", error);
        return res.status(500).json({ message: ERROR_MESSAGES.ERROR_INTERNAL_SERVER });
    }

    const passengerLogicError = validatePassengerLogic(passengerDataList);
    if (passengerLogicError) {
        return res.status(400).json({ message: passengerLogicError });
    }

    let transaction: Transaction | undefined;

    try {
        transaction = await sequelize.transaction();

        const newBookingReference = await generateUniqueBookingReference();
        
        // Calcular passengerCount y totalAmount (simplificado, se puede expandir)
        const passengerCount = passengerDataList.length;
        const calculatedTotalAmount = bookingData.totalAmount || passengerDataList.reduce((sum: number, p: any) => sum + 100, 0); // Precio placeholder

        // Obtener estado por defecto (ej. PENDIENTE)
        const defaultStatus = await BookingStatusModel.findOne({ where: { code: 'PENDING' }, transaction }); // Asumiendo que existe este código
        if (!defaultStatus) {
            await transaction.rollback();
            return res.status(500).json({ message: "Estado de reserva por defecto no encontrado." });
        }

        const createdBooking = await BookingModel.create({
            ...bookingData,
            totalAmount: calculatedTotalAmount,
            passengerCount: passengerCount,
            bookingReference: newBookingReference,
            fk_client_id: clientRecord.id, // ID del ClientModel asociado al usuario
            fk_created_by_id: loggedInUser.id, // ID del UserModel
            fk_updated_by_id: loggedInUser.id, // ID del UserModel
            fk_status_id: bookingData.fk_status_id || defaultStatus.id,
            paymentSuccessful: bookingData.paymentSuccessful || false,
        }, { transaction });

        const createdPassengersModels: PassengerModel[] = [];
        const bookingPassengersEntries = [];

        for (const passengerData of passengerDataList) {
            // Aquí se podría añadir lógica para buscar si el pasajero ya existe
            // y evitar duplicados si se gestionan pasajeros a nivel global.
            // Por ahora, creamos uno nuevo para cada reserva.
            const newPassenger = await PassengerModel.create({
                ...passengerData,
                // associatedAdultId se manejará después si es necesario vincular por ID real
            }, { transaction });
            createdPassengersModels.push(newPassenger);

            bookingPassengersEntries.push({
                fk_booking_id: createdBooking.id,
                fk_passenger_id: newPassenger.id,
            });
        }
        
        await BookingPassengersModel.bulkCreate(bookingPassengersEntries, { transaction });
        
        // Lógica para asociar infantes a adultos si es necesario (más compleja)
        // Esto requeriría que `associatedAdultId` en `IPassengerData` sea un índice o un ID temporal
        // que se pueda resolver a los `id` reales de los `PassengerModel` recién creados.
        // Ejemplo simplificado:
        // for (let i = 0; i < passengerDataList.length; i++) {
        //    if (passengerDataList[i].passengerType === 'infant' && passengerDataList[i].temporaryAdultLink) {
        //        const adultPassengerModel = createdPassengersModels.find(p => p.tempId === passengerDataList[i].temporaryAdultLink);
        //        if (adultPassengerModel) {
        //            await createdPassengersModels[i].update({ associatedAdultId: adultPassengerModel.id }, { transaction });
        //        }
        //    }
        // }


        await transaction.commit();

        // Cargar la reserva completa con sus relaciones para la respuesta
        const result = await BookingModel.findByPk(createdBooking.id, {
            include: [
                { model: BookingStatusModel, as: 'status' },
                { model: DestinationsModel, as: 'origin' },
                { model: DestinationsModel, as: 'destination' },
                { model: ClientModel, as: 'client', include: [{model: UserModel, as: 'user', attributes: ['id', 'email', 'username']}] },
                { model: UserModel, as: 'createdBy', attributes: ['id', 'username'] },
                { model: UserModel, as: 'updatedBy', attributes: ['id', 'username'] },
                { 
                    model: PassengerModel, 
                    as: 'passengers',
                    through: { attributes: [] }, // No incluir atributos de la tabla de unión
                    include: [
                        { model: GenderModel, as: 'gender'},
                        { model: CountriesModel, as: 'nationality'},
                        { model: DocumentTypesModel, as: 'documentType'},
                        // { model: PassengerModel, as: 'associatedAdult'} // Para ver el adulto asociado si se implementa bien
                    ]
                },
            ]
        });

        return res.status(201).json({
            message: SUCCESS_MESSAGES.SUCCESS_RESOURCE_CREATED,
            data: result,
        });

    } catch (error: any) {
        if (transaction) await transaction.rollback();
        console.error("Error creating booking:", error);
        if (error instanceof CustomException) {
            return res.status(error.statusCode).json({ message: error.message, errors: error.errors });
        }
        return res.status(500).json({ message: ERROR_MESSAGES.ERROR_INTERNAL_SERVER, error: error.message });
    }
};


export const getBookingById = async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.params;
    const loggedInUser = req.user;

    if (!loggedInUser) {
        return res.status(401).json({ message: ERROR_MESSAGES.ERROR_UNAUTHORIZED_ACCESS });
    }

    try {
        const booking = await BookingModel.findByPk(id, {
            include: [
                { model: BookingStatusModel, as: 'status' },
                { model: DestinationsModel, as: 'origin' },
                { model: DestinationsModel, as: 'destination' },
                { model: ClientModel, as: 'client', include: [{model: UserModel, as: 'user', attributes: ['id', 'email', 'username']}] },
                { model: UserModel, as: 'createdBy', attributes: ['id', 'username'] },
                { model: UserModel, as: 'updatedBy', attributes: ['id', 'username'] },
                { 
                    model: PassengerModel, 
                    as: 'passengers',
                    through: { attributes: [] },
                    include: [
                        { model: GenderModel, as: 'gender'},
                        { model: CountriesModel, as: 'nationality'},
                        { model: DocumentTypesModel, as: 'documentType'},
                        // { model: PassengerModel, as: 'associatedAdult'}
                    ]
                },
            ]
        });

        if (!booking) {
            return res.status(404).json({ message: ERROR_MESSAGES.ERROR_RESOURCE_NOT_FOUND });
        }

        // Verificar permisos: el usuario es admin o el creador/cliente de la reserva
        const clientRecord = await ClientModel.findOne({ where: { fk_user_id: loggedInUser.id } });
        const isAdmin = loggedInUser.roles?.includes('admin'); // Asumiendo que req.user.roles es un array de strings

        if (!isAdmin && booking.fk_client_id !== clientRecord?.id && booking.fk_created_by_id !== loggedInUser.id) {
            return res.status(403).json({ message: ERROR_MESSAGES.ERROR_FORBIDDEN_ACCESS });
        }
        
        return res.status(200).json({
            message: SUCCESS_MESSAGES.SUCCESS_OPERATION,
            data: booking,
        });

    } catch (error: any) {
        console.error("Error fetching booking by ID:", error);
        return res.status(500).json({ message: ERROR_MESSAGES.ERROR_INTERNAL_SERVER, error: error.message });
    }
};

export const getUserBookings = async (req: AuthenticatedRequest, res: Response) => {
    const loggedInUser = req.user;

    if (!loggedInUser) {
        return res.status(401).json({ message: ERROR_MESSAGES.ERROR_UNAUTHORIZED_ACCESS });
    }
    
    let clientRecord;
    try {
        clientRecord = await ClientModel.findOne({ where: { fk_user_id: loggedInUser.id } });
        if (!clientRecord) {
            return res.status(200).json({ message: INFO_MESSAGES.NO_RECORDS_FOUND, data: [] });
        }
    } catch (error) {
        console.error("Error finding client for user bookings:", error);
        return res.status(500).json({ message: ERROR_MESSAGES.ERROR_INTERNAL_SERVER });
    }

    try {
        const bookings = await BookingModel.findAll({
            where: { fk_client_id: clientRecord.id, deleted: false },
            include: [ // Incluir menos detalles para un resumen, o los mismos que getBookingById si es necesario
                { model: BookingStatusModel, as: 'status', attributes: ['id', 'name', 'code'] },
                { model: DestinationsModel, as: 'destination', attributes: ['id', 'name', 'code'] },
                // No incluir todos los pasajeros aquí para un resumen, o solo un conteo.
                // Para este ejemplo, los incluimos para consistencia, pero se puede optimizar.
                 { 
                    model: PassengerModel, 
                    as: 'passengers',
                    attributes: ['id', 'passengerType'], // Solo lo básico para el resumen
                    through: { attributes: [] },
                },
            ],
            order: [['createdAt', 'DESC']]
        });

        if (!bookings || bookings.length === 0) {
            return res.status(200).json({ message: INFO_MESSAGES.NO_RECORDS_FOUND, data: [] });
        }

        return res.status(200).json({
            message: SUCCESS_MESSAGES.SUCCESS_OPERATION,
            data: bookings,
        });
    } catch (error: any) {
        console.error("Error fetching user bookings:", error);
        return res.status(500).json({ message: ERROR_MESSAGES.ERROR_INTERNAL_SERVER, error: error.message });
    }
};

export const getAllBookings = async (req: AuthenticatedRequest, res: Response) => {
    // Este endpoint es para administradores
    try {
        const bookings = await BookingModel.findAll({
            where: { deleted: false },
            include: [
                { model: BookingStatusModel, as: 'status', attributes: ['id', 'name', 'code'] },
                { model: DestinationsModel, as: 'destination', attributes: ['id', 'name', 'code'] },
                { model: ClientModel, as: 'client', include: [{model: UserModel, as: 'user', attributes: ['id', 'email', 'username']}] },
                { model: UserModel, as: 'createdBy', attributes: ['id', 'username'] },
            ],
            order: [['createdAt', 'DESC']]
        });

        if (!bookings || bookings.length === 0) {
            return res.status(200).json({ message: INFO_MESSAGES.NO_RECORDS_FOUND, data: [] });
        }

        return res.status(200).json({
            message: SUCCESS_MESSAGES.SUCCESS_OPERATION,
            data: bookings,
        });
    } catch (error: any) {
        console.error("Error fetching all bookings:", error);
        return res.status(500).json({ message: ERROR_MESSAGES.ERROR_INTERNAL_SERVER, error: error.message });
    }
};

export const updateBookingStatus = async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.params;
    const { fk_status_id, paymentSuccessful } = req.body as { fk_status_id?: string, paymentSuccessful?: boolean};
    const loggedInUser = req.user;

    if (!loggedInUser || !loggedInUser.id) {
        return res.status(401).json({ message: ERROR_MESSAGES.ERROR_UNAUTHORIZED_ACCESS });
    }
     if (!fk_status_id && typeof paymentSuccessful === 'undefined') {
        return res.status(400).json({ message: "Se requiere fk_status_id o paymentSuccessful para actualizar." });
    }

    let transaction: Transaction | undefined;
    try {
        transaction = await sequelize.transaction();
        const booking = await BookingModel.findByPk(id, { transaction });

        if (!booking) {
            await transaction.rollback();
            return res.status(404).json({ message: ERROR_MESSAGES.ERROR_RESOURCE_NOT_FOUND });
        }
        
        // Lógica de permisos: Solo admin o roles específicos pueden cambiar ciertos estados.
        // Por ahora, permitimos si es admin o el creador para simplificar.
        const clientRecord = await ClientModel.findOne({ where: { fk_user_id: loggedInUser.id }, transaction });
        const isAdmin = loggedInUser.roles?.includes('admin');

        if (!isAdmin && booking.fk_client_id !== clientRecord?.id && booking.fk_created_by_id !== loggedInUser.id) {
            await transaction.rollback();
            return res.status(403).json({ message: ERROR_MESSAGES.ERROR_FORBIDDEN_ACCESS });
        }

        const updateData: { fk_status_id?: string, paymentSuccessful?: boolean, fk_updated_by_id: string } = {
            fk_updated_by_id: loggedInUser.id,
        };

        if (fk_status_id) {
            const statusExists = await BookingStatusModel.findByPk(fk_status_id, { transaction });
            if (!statusExists) {
                await transaction.rollback();
                return res.status(400).json({ message: "El estado proporcionado no es válido." });
            }
            updateData.fk_status_id = fk_status_id;
        }
        if (typeof paymentSuccessful !== 'undefined') {
            updateData.paymentSuccessful = paymentSuccessful;
        }

        await booking.update(updateData, { transaction });
        await transaction.commit();
        
        // Devolver la reserva actualizada con sus relaciones
        const updatedBookingWithDetails = await BookingModel.findByPk(id, {
             include: [
                { model: BookingStatusModel, as: 'status' },
                { model: DestinationsModel, as: 'destination' },
                { model: ClientModel, as: 'client', include: [{model: UserModel, as: 'user', attributes:['id', 'email', 'username']}] },
            ]
        });


        return res.status(200).json({
            message: SUCCESS_MESSAGES.SUCCESS_RESOURCE_UPDATED,
            data: updatedBookingWithDetails
        });

    } catch (error: any) {
        if (transaction) await transaction.rollback();
        console.error("Error updating booking status:", error);
        return res.status(500).json({ message: ERROR_MESSAGES.ERROR_INTERNAL_SERVER, error: error.message });
    }
};


// Nota: La cancelación podría ser un cambio de estado a 'CANCELLED'
// Se puede usar updateBookingStatus para ello, o crear un endpoint específico si la lógica es más compleja (ej. reembolsos)
export const cancelBooking = async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.params;
    const loggedInUser = req.user;

    if (!loggedInUser || !loggedInUser.id) {
        return res.status(401).json({ message: ERROR_MESSAGES.ERROR_UNAUTHORIZED_ACCESS });
    }

    let transaction: Transaction | undefined;
    try {
        transaction = await sequelize.transaction();
        const booking = await BookingModel.findByPk(id, { transaction });

        if (!booking) {
            await transaction.rollback();
            return res.status(404).json({ message: ERROR_MESSAGES.ERROR_RESOURCE_NOT_FOUND });
        }

        const clientRecord = await ClientModel.findOne({ where: { fk_user_id: loggedInUser.id }, transaction });
        const isAdmin = loggedInUser.roles?.includes('admin');

        if (!isAdmin && booking.fk_client_id !== clientRecord?.id && booking.fk_created_by_id !== loggedInUser.id) {
            await transaction.rollback();
            return res.status(403).json({ message: ERROR_MESSAGES.ERROR_FORBIDDEN_ACCESS });
        }

        // No permitir cancelar si ya está cancelada o en un estado final (ej. completada)
        const currentStatus = await BookingStatusModel.findByPk(booking.fk_status_id, {transaction});
        if (currentStatus?.code === 'CANCELLED' || currentStatus?.code === 'COMPLETED') {
            await transaction.rollback();
            return res.status(400).json({ message: `La reserva ya está ${currentStatus.name.toLowerCase()} y no se puede cancelar.`});
        }
        
        const cancelledStatus = await BookingStatusModel.findOne({ where: { code: 'CANCELLED' }, transaction });
        if (!cancelledStatus) {
            await transaction.rollback();
            return res.status(500).json({ message: "Estado 'Cancelado' no encontrado." });
        }

        await booking.update({ 
            fk_status_id: cancelledStatus.id, 
            paymentSuccessful: false, // O mantener el estado de pago si la lógica de negocio lo requiere
            fk_updated_by_id: loggedInUser.id 
        }, { transaction });
        
        // Aquí podría ir lógica adicional (ej. enviar notificación, iniciar reembolso si aplica)

        await transaction.commit();

        return res.status(200).json({ message: "Reserva cancelada exitosamente." });

    } catch (error: any) {
        if (transaction) await transaction.rollback();
        console.error("Error cancelling booking:", error);
        return res.status(500).json({ message: ERROR_MESSAGES.ERROR_INTERNAL_SERVER, error: error.message });
    }
};
