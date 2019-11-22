import expressLoader from "./express";
import mongooseLoader from "./mongoose";
import logger from "./logger";
import diLoader from "./dependecyFactory";
import express from "./express";

export default async ({ expressApp }) => {
  // load mongoose
  await mongooseLoader();
  logger.info("DB loaded and connected!");
  // load express app
  diLoader();
  logger.info("Base DI Loaded and Ready");
  expressApp.use(
    require("morgan")("combined", {
      stream: { write: message => logger.info(message) }
    })
  );

  await expressLoader({ app: expressApp });
  logger.info(" Express loaded!");
};



