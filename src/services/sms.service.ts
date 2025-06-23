import { TWILIO } from '@src/constants/config-global';
import twilio, { Twilio } from 'twilio';

export class SMSService {
    private client: Twilio;

    constructor() {
        const sid = TWILIO.TWILIO_ACCOUNT_SID!;
        const token = TWILIO.TWILIO_AUTH_TOKEN!;
        this.client = twilio(sid, token);
    }

    /**
     * Envía un SMS utilizando Twilio
     * @param to Número de destino incluyendo prefijo internacional (e.g., '+521234567890')
     * @param body Texto del mensaje
     */
    public async sendSMS(to: string, body: string) {
        return this.client.messages.create({
            from: TWILIO.TWILIO_FROM_PHONE!,
            to,
            body,
        });
    }
}
