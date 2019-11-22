"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const logger_1 = require("./logger");
exports.default = () => {
    // for now just load the logger
    typedi_1.Container.set("logger", logger_1.default);
    logger_1.default.info("logger set into DI container");
};
//# sourceMappingURL=dependecyFactory.js.map