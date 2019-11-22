"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const config_1 = require("./config");
const path = require("path");
// type-di required meta data
require("reflect-metadata");
require("./subscribers/EventRegister");
const typedi_1 = require("typedi");
let logger;
async function startServer() {
    const app = express();
    // test -----------------------------------------------
    process.on("unhandledRejection", (error, promise) => {
        console.log("Error ", error);
        console.log("Promise " + promise);
    });
    // check and remove the above code if it doesnt work -- placed it to check promise rejection errors
    // --------------------------------------------------------------------------------
    // *******************************************************
    // load express and mongo
    console.log(__dirname);
    const staticFiles = express.static(path.join(__dirname + "../../public"));
    app.use(staticFiles);
    await require("./loaders").default({ expressApp: app });
    logger = typedi_1.Container.get("logger");
    // listen to port
    app.listen(config_1.default.PORT, () => {
        logger.info(`💃   Server listening on port: ${config_1.default.BASE_URL}:${config_1.default.PORT}`);
    });
}
startServer();
//# sourceMappingURL=index.js.map