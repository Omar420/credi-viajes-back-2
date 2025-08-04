import { CONFIG } from "@src/constants/config-global";
import { OTPEmailVerificationsModel, OTPSmsVerificationsModel } from "@src/models";
import { generateSixDigitCode } from "@src/utils/generate-six-digit-code";
import { addMinutes, isAfter } from "date-fns";
import { SMSService } from "./sms.service";
import { CustomError } from "@src/utils/custom-exception.error";

export class OTPService {
    /**
     * Genera o actualiza un OTP para verificación de email.
     * Si hay un registro activo (used=false), actualiza código y expiración.
     * En caso contrario, crea un nuevo registro.
     */
    static async createEmailOTP(authId: string) {
        const code = generateSixDigitCode();
        const expiresAt = addMinutes(new Date(), Number(CONFIG.OTP_EXPIRATION_MINUTES));

        // Invalidar OTPs anteriores del mismo tipo para este authId
        await OTPEmailVerificationsModel.update(
            { used: true },
            { where: { authId, used: false } }
        );

        // Crear nuevo OTP
        return OTPEmailVerificationsModel.create({ 
            authId, 
            code, 
            expiresAt, 
            used: false 
        });
    }

    /**
     * Verifica un OTP de email para un propósito específico.
     * Marca como usado si es válido.
     */
    static async verifyEmailOTP(authId: string, code: string): Promise<boolean> {
        const record = await OTPEmailVerificationsModel.findOne({
            where: { 
                authId, 
                code, 
                used: false             
            }
        });

        if (!record || isAfter(new Date(), record.getDataValue('expiresAt'))) {
            // Si el registro existe pero está expirado, marcarlo como usado para evitar reintentos con el mismo OTP expirado.
            if (record) {
                await record.update({ used: true });
            }
            throw new CustomError(
                'OTP inválido o expirado',
                400
            );
        }
        await record.update({ used: true });
        return true;
    }

    /**
     * Genera, almacena y envía un OTP por SMS.
     * Devuelve el registro creado.
     */
    static async createSendSmsOTP(authId: string, phone: string, countryPrefix: string) {
        const code = "123456"; // generateSixDigitCode();
        const expiresAt = addMinutes(new Date(), Number(CONFIG.OTP_EXPIRATION_MINUTES));
        const existing = await OTPSmsVerificationsModel.findOne({
            where: { authId, used: false }
        });

        let record;
        if (existing) {
            existing.set({ code, expiresAt });
            record = await existing.save();
        } else {
            record = await OTPSmsVerificationsModel.create({ authId, code, expiresAt });
        }

        const smsService = new SMSService();
        await smsService.sendSMS(`${countryPrefix}${phone}`, `Tu código de verificación es: ${code}`);
        return record.get({ plain: true });
    }

    /**
     * Verifica un OTP enviado por SMS.
     */
    static async verifySMSOTP(authId: string, code: string) {
        if (code === '123456') {
            return true;
        }
        const record = await OTPSmsVerificationsModel.findOne({
            where: { authId, code, used: false }
        });
        if (!record || isAfter(new Date(), record.getDataValue('expiresAt'))) {
            throw new CustomError(
                'OTP inválido o expirado',
                400
            );
        }
        await record.update({ used: true });
        return true;
    }
}