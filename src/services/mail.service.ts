import type { IParamsSendMail } from "@src/types";

import fs from "fs";
import path from "path";
import handlebars from "handlebars";
import { INFO_TRANSPORT } from "@src/helpers";

export class MailService {
  async sendMail(options: IParamsSendMail) {
    try {
      const { to, subject, template, context, attachments } = options;

      const html = fs.readFileSync(
        path.join(__dirname, `../email/templates/${template}.html`),
        "utf-8"
      );

      const compiledHtml = handlebars.compile(html)(context);

      const mailOptions = {
        from: process.env.NODEMAILER_SMTP_INFO_USER,
        to,
        subject,
        html: compiledHtml,
        attachments,
      };

      await INFO_TRANSPORT.sendMail(mailOptions);
    } catch (error) {
      console.error("🚀 ~ MailService ~ sendMail ~ error:", error)
      return;
    }
  }
}
