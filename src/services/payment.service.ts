import sequelize from "@src/config/connection";
import {
    PaymentModel,
    InstallmentModel,
    CreditPurchaseModel,
    BookingModel,
    BookingStatusModel
} from "@src/models";
import { CustomError } from "@src/utils/custom-exception.error";

interface IPaymentPayload {
    installment_id: string;
    amount_paid: number;
    payment_method: string;
    payment_reference?: string;
}

export class PaymentService {

    public async createPayment(payload: IPaymentPayload, userId: string) {
        console.log('--- Iniciando createPayment ---');
        console.log('Payload de pago recibido:', JSON.stringify(payload, null, 2));

        return sequelize.transaction(async (transaction) => {
            const { installment_id, amount_paid, payment_method, payment_reference } = payload;

            const installment = await InstallmentModel.findByPk(installment_id, { transaction, include: [CreditPurchaseModel] });
            if (!installment) {
                throw new CustomError("La cuota especificada no fue encontrada.", 404);
            }
            if (installment.getDataValue('status') === 'paid') {
                throw new CustomError("Esta cuota ya ha sido pagada.", 400);
            }
            console.log('Cuota encontrada:', installment.getDataValue('id'));

            if (Number(amount_paid) < installment.getDataValue('amount_due')) {
                throw new CustomError(`El monto del pago (${amount_paid}) es menor al monto adeudado (${installment.getDataValue('amount_due')}). Se requieren pagos completos.`, 400);
            }

            const newPayment = await PaymentModel.create({
                installment_id,
                amount_paid,
                payment_method,
                payment_reference,
                paid_at: new Date(),
            }, { transaction });
            console.log('Registro de pago creado:', newPayment.getDataValue('id'));

            await installment.update({
                status: 'paid',
                paid_at: new Date(),
            }, { transaction });
            console.log('Estado de la cuota actualizado a "pagado".');

            const creditPurchase = await CreditPurchaseModel.findByPk(installment.getDataValue('credit_purchase_id'), { transaction });
            if (!creditPurchase) {
                throw new CustomError("No se encontró la compra a crédito asociada a esta cuota.", 500);
            }
            const newTotalPaid = Number(creditPurchase.getDataValue('total_paid')) + Number(amount_paid);
            await creditPurchase.update({ total_paid: newTotalPaid }, { transaction });
            console.log(`Total pagado de la compra actualizado a: ${newTotalPaid}`);

            if (newTotalPaid >= Number(creditPurchase.getDataValue('total_with_interest'))) {
                await creditPurchase.update({ is_fully_paid: true }, { transaction });
                console.log('La compra ha sido completamente pagada.');

                const booking = await BookingModel.findByPk(creditPurchase.getDataValue('reservation_id'), { transaction });
                if (booking) {
                    // Assuming a 'PAID' status exists with this code
                    const paidStatus = await BookingStatusModel.findOne({ where: { code: 'PAID' }, transaction });
                    if (paidStatus) {
                        await booking.update({
                            fk_status_id: paidStatus.getDataValue('id'),
                            paymentSuccessful: true,
                            fk_updated_by_id: userId,
                        }, { transaction });
                        console.log('Estado del Booking actualizado a "Pagado".');
                    }
                }
            }

            return newPayment;
        });
    }
}
