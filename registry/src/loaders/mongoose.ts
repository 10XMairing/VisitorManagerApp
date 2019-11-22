import * as mongoose from "mongoose";

export default () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect("mongodb://localhost:27017/inno-registry", {
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
