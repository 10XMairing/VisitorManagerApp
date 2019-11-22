import * as express from "express";
import config from "./config";
import * as path from "path";

// type-di required meta data
import "reflect-metadata";
import "./subscribers/EventRegister";

import { Container } from "typedi";
import { Logger } from "winston";

let logger: Logger;

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

  logger = Container.get("logger");

  // listen to port
  app.listen(config.PORT, () => {
    logger.info(
      `💃   Server listening on port: ${config.BASE_URL}:${config.PORT}`
    );
  });
}

startServer();
