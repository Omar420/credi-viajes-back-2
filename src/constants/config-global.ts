import { IPathRoutes } from "@src/types"

export const CONFIG = {
  COMPANY_NAME: "Credi Viajes",

  CURRENT_ENVIRONMENT: process.env.NODE_ENV,
  POSTGRES_URL: process.env.DB_URL ?? "",
  TIME_ZONE: "-04:00",
  API_KEY: process.env.API_KEY ?? "",

  JWT_SECRET: process.env.JWT_SECRET ?? "",
  EXPIRATED_LAPSE_TIME: process.env.EXPIRATED_LAPSE_TIME || "5h" as const,
  OTP_EXPIRATION_MINUTES: process.env.OTP_EXPIRATION_MINUTES ? Number(process.env.OTP_EXPIRATION_MINUTES) : 10,

  PORT: process.env.PORT ?? "4000"
}

export const DATE_FORMAT = {
  TIME_ZONE: 'America/Caracas',
  FULL_DATE: 'YYYY-MM-DD HH:mm:ss'
}

export const ROLES = {
  ADMIN: "admin",
  OPERATOR: "operator",
  SUPERADMIN: "superadmin",
}

export const PATH_ROUTES: IPathRoutes = {
  sa: "/api/sa",
  auth: "/api/auth",
  users: "/api/users",
  webhook: "/api/webhook",
  utils: "/api/utils",
  clients: "/api/client",
  products: "/api/products",
  productCategory: "/api/product-category",
}

export const USER_TYPE = {
  CLIENT: "client",
  USER: "user",
}

export const MAIL = {
  NODEMAILER_SMTP_HOST: process.env.NODEMAILER_SMTP_HOST || "",
  NODEMAILER_SMTP_PORT: process.env.NODEMAILER_SMTP_PORT || "",
  NODEMAILER_SMTP_INFO_USER: process.env.NODEMAILER_SMTP_INFO_USER || "",
  NODEMAILER_SMTP_INFO_PASS: process.env.NODEMAILER_SMTP_INFO_PASS || "",

  TEMPLATES: {
    PASSWORD_RESET: "password-reset-code", // Este ya existía, podría ser el mismo que PASSWORD_RESET_OTP_CODE
    USER_REGISTRATION: "user-registration",
    EMAIL_VERIFICATION: "client-registration-otp-code",
    PASSWORD_RESET_OTP_CODE: "password-reset-otp-code", // Específico para el OTP de reseteo
    PASSWORD_CHANGED_CONFIRMATION: "password-changed-confirmation", // Para confirmar el cambio

  },
  SUBJECT: {
    PASSWORD_RESET: `Recupera tu contraseña - ${CONFIG.COMPANY_NAME}`, // Asunto para el email con link/instrucciones de reseteo
    USER_REGISTRATION: `Registro de usuario - ${CONFIG.COMPANY_NAME}`,
    EMAIL_VERIFICATION: `Verificación de Correo electrónico - ${CONFIG.COMPANY_NAME}`,
    PASSWORD_RESET_OTP: `Tu código para restablecer la contraseña - ${CONFIG.COMPANY_NAME}`, // Asunto para el email con OTP
    PASSWORD_CHANGED_CONFIRMATION: `Confirmación de cambio de contraseña - ${CONFIG.COMPANY_NAME}`, // Asunto para la confirmación
  },
}

export const TWILIO = {
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID || '',
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN || '',
  TWILIO_FROM_PHONE: process.env.TWILIO_FROM_PHONE || '',
};
