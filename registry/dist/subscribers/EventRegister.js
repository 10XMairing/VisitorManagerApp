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
const event_dispatch_1 = require("event-dispatch");
const EmailService_1 = require("../services/EmailService");
const SmsService_1 = require("../services/SmsService");
const typedi_1 = require("typedi");
const utils_1 = require("../utils");
let EmailServiceInstance = typedi_1.Container.get(EmailService_1.default);
let SmsServiceInstance = typedi_1.Container.get(SmsService_1.default);
const logger_1 = require("../loaders/logger");
let UserEventSubscriber = class UserEventSubscriber {
    async onCheckIn(user) {
        logger_1.default.debug("user checked in  : %o", user);
        let options = {
            to: user.host.email,
            subject: "You have a visitor.",
            text: ``,
            html: utils_1.getVisitEmail(user)
        };
        // send email to host
        try {
            let response = await EmailServiceInstance.sendMail(options);
            logger_1.default.info("%o", response);
        }
        catch (err) {
            logger_1.default.debug(err);
        }
        // send email to visitor
        options = {
            to: user.email,
            subject: "Visitor Record, Checked In",
            text: ``,
            html: utils_1.getCheckedInTemplate(user)
        };
        try {
            let response = await EmailServiceInstance.sendMail(options);
            logger_1.default.info("%o", response);
        }
        catch (err) {
            logger_1.default.debug(err);
        }
        // // send sms
        // try {
        //   let res = await SmsServiceInstance.sendSms(
        //     user.phone,
        //     getCheckInSMs(user)
        //   );
        //   logger.debug(res);
        // } catch (err) {
        //   logger.debug(err);
        // }
    }
    async onCheckout(user) {
        logger_1.default.debug("user checked out  : %o", user);
        const options = {
            to: user.email,
            subject: "Visitor Record , Checked Out",
            text: "",
            html: utils_1.getCheckOutTemplate(user)
        };
        // send email
        try {
            let response = await EmailServiceInstance.sendMail(options);
            logger_1.default.info("%o", response);
        }
        catch (err) {
            logger_1.default.debug("%o", err);
        }
        // send sms
        try {
            let res = await SmsServiceInstance.sendSms(user.phone, utils_1.getCheckOutSms(user));
            logger_1.default.debug("%o", res);
        }
        catch (err) {
            logger_1.default.debug("%o", err);
        }
    }
};
__decorate([
    event_dispatch_1.On("checkin"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserEventSubscriber.prototype, "onCheckIn", null);
__decorate([
    event_dispatch_1.On("checkout"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserEventSubscriber.prototype, "onCheckout", null);
UserEventSubscriber = __decorate([
    event_dispatch_1.EventSubscriber()
], UserEventSubscriber);
exports.UserEventSubscriber = UserEventSubscriber;
//# sourceMappingURL=EventRegister.js.map