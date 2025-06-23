import { Attachment } from "nodemailer/lib/mailer";

export interface IParamsSendMail {
  to: string | string[];
  subject: string;
  template: string;
  context: Record<string, any>;
  attachments?: Attachment[];
}
