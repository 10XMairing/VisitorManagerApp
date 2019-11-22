import recordsRouter from "./records";
import hostsRouter from "./hosts";

import * as express from "express";

export default (app: express.Application) => {
  app.use("/api/v1/records", recordsRouter);
  app.use("/api/v1/hosts", hostsRouter);
};
