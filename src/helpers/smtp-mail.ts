import { MAIL } from "@src/constants/config-global";
import nodemailer from "nodemailer";

export const INFO_TRANSPORT = nodemailer.createTransport({
    host: MAIL.NODEMAILER_SMTP_HOST as string,
    port: Number(MAIL.NODEMAILER_SMTP_PORT as string),
    auth: {
        user: MAIL.NODEMAILER_SMTP_INFO_USER as string,
        pass: MAIL.NODEMAILER_SMTP_INFO_PASS as string,
    },
    tls: {
        rejectUnauthorized: false,
    },
});