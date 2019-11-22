import { Service } from "typedi";
import * as nodemailer from "nodemailer";

import config from "../../config";

@Service()
export default class EmailService {
  private smtpTransport;
  constructor() {
    this.smtpTransport = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: config.GMAIL_OAUTH.user,
        type: config.GMAIL_OAUTH.type,
        refreshToken: config.GMAIL_OAUTH.refresh_token,
        clientId: config.GMAIL_OAUTH.cliendid,
        clientSecret: config.GMAIL_OAUTH.client_secret
      }
    });
  }

  async sendMail(options: {
    to: string;
    subject: string;
    html?: string;
    text: string;
  }) {
    const mailOptions = {
      from: config.GMAIL_OAUTH.user,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html || ""
    };

    return new Promise((resolve, reject) => {
      // resolve("EMAIL IS DISABLED FOR A WHILE");
      this.smtpTransport.sendMail(mailOptions, (error, response) => {
        if (error) {
          reject(error);
        }

        this.smtpTransport.close();
        resolve(response);
      });
    });
  }
}
