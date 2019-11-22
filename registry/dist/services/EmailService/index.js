"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const nodemailer = require("nodemailer");
const config_1 = require("../../config");
let EmailService = class EmailService {
    constructor() {
        this.smtpTransport = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: config_1.default.GMAIL_OAUTH.user,
                type: config_1.default.GMAIL_OAUTH.type,
                refreshToken: config_1.default.GMAIL_OAUTH.refresh_token,
                clientId: config_1.default.GMAIL_OAUTH.cliendid,
                clientSecret: config_1.default.GMAIL_OAUTH.client_secret
            }
        });
    }
    async sendMail(options) {
        const mailOptions = {
            from: config_1.default.GMAIL_OAUTH.user,
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
};
EmailService = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [])
], EmailService);
exports.default = EmailService;
//# sourceMappingURL=index.js.map