"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("./express");
const mongoose_1 = require("./mongoose");
const logger_1 = require("./logger");
const dependecyFactory_1 = require("./dependecyFactory");
exports.default = async ({ expressApp }) => {
    // load mongoose
    await mongoose_1.default();
    logger_1.default.info("DB loaded and connected!");
    // load express app
    dependecyFactory_1.default();
    logger_1.default.info("Base DI Loaded and Ready");
    expressApp.use(require("morgan")("combined", {
        stream: { write: message => logger_1.default.info(message) }
    }));
    await express_1.default({ app: expressApp });
    logger_1.default.info(" Express loaded!");
};
//# sourceMappingURL=index.js.map