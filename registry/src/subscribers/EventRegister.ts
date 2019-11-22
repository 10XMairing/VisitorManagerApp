import { EventSubscriber, On } from "event-dispatch";
import EmailService from "../services/EmailService";
import SmsService from "../services/SmsService";
import { Container } from "typedi";
import {
  getCheckOutTemplate,
  getCheckedInTemplate,
  getVisitEmail,
  getCheckInSMs,
  getCheckOutSms
} from "../utils";

let EmailServiceInstance = Container.get(EmailService);
let SmsServiceInstance = Container.get(SmsService);
import logger from "../loaders/logger";

@EventSubscriber()
export class UserEventSubscriber {
  @On("checkin")
  async onCheckIn(user: {
    name: string;
    email: string;
    phone: string;
    checkin: string;
    address: string;
    host: {
      name: string;
      email: string;
    };
  }) {
    logger.debug("user checked in  : %o", user);
    let options = {
      to: user.host.email,
      subject: "You have a visitor.",
      text: ``,
      html: getVisitEmail(user)
    };
    // send email to host
    try {
      let response = await EmailServiceInstance.sendMail(options);
      logger.info("%o", response);
    } catch (err) {
      logger.debug(err);
    }
    // send email to visitor

    options = {
      to: user.email,
      subject: "Visitor Record, Checked In",
      text: ``,
      html: getCheckedInTemplate(user)
    };

    try {
      let response = await EmailServiceInstance.sendMail(options);
      logger.info("%o", response);
    } catch (err) {
      logger.debug(err);
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

  @On("checkout")
  async onCheckout(user: {
    name: string;
    email: string;
    phone: string;
    address: string;
    checkout: string;
    checkin: string;
  }) {
    logger.debug("user checked out  : %o", user);
    const options = {
      to: user.email,
      subject: "Visitor Record , Checked Out",
      text: "",
      html: getCheckOutTemplate(user)
    };

    // send email
    try {
      let response = await EmailServiceInstance.sendMail(options);
      logger.info("%o", response);
    } catch (err) {
      logger.debug("%o", err);
    }

    // send sms

    try {
      let res = await SmsServiceInstance.sendSms(
        user.phone,
        getCheckOutSms(user)
      );
      logger.debug("%o", res);
    } catch (err) {
      logger.debug("%o", err);
    }
  }
}
