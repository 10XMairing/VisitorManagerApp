import * as mongoose from "mongoose";
import config from "../config";

export default () => {
  let remoteUri = `mongodb://${config.MLAB_USER}:${config.MLAB_PASSWORD}@ds217349.mlab.com:17349/visitor-manager`;
  let localUri = "mongodb://localhost:27017/inno-registry";

  let connectionUri =
    process.env.NODE_ENV == "production" ? remoteUri : localUri;

  console.log(`Connectiong to db :${connectionUri}`);
  return new Promise((resolve, reject) => {
    mongoose
      .connect(connectionUri, {
        useNewUrlParser: true,
        useCreateIndex: true
      })
      .then(mongose => {
        resolve("Connected to mongo database");
      })
      .catch(Err => {
        reject("Error connecting to mongo database");
      });
  });
};
