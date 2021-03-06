import * as parser from "body-parser";
import { errors } from "celebrate";
import * as express from "express";
import * as path from "path";
import * as cors from "cors";
import * as history from "connect-history-api-fallback";

// routes

export default ({ app }: { app: express.Application }) => {
  // body-parsers
  app.use(parser.json());
  app.use(
    parser.urlencoded({
      extended: false
    })
  );

  app.use(cors());

  // routing is not supposed to work without this but its working I DONT KNOW WHY
  // app.use(
  //   history({
  //     disableDotRule: true,
  //     verbose: false
  //   })
  // );

  // load router
  require("../api/v1").default(app);

  app.use(errors());

  app.get("/", (req, res, next) => {
    res.render(path.join(__dirname + "../../../public/index.html"));
  });

  //  load routes

  // error handlers
  app.use((req, res, next) => {
    const err = new Error("Not found");
    err["status"] = 404;
    next(err);
  });

  app.use((err, req, res, next) => {
    /**
     * Handle 401 thrown by express-jwt library
     */
    if (err.name === "UnauthorizedError") {
      return res
        .status(err.status)
        .send({ message: err.message })
        .end();
    }
    return next(err);
  });
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    // return joi errors with a 404
    if (err.joi) {
      res.status(400);
      return res.json({
        message: err.joi.details[0].message || "Error"
      });
    }
    res.json({
      message: err.message,
      error: err
    });
  });
};
