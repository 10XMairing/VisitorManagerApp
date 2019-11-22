"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const config_1 = require("../config");
exports.default = () => {
    let remoteUri = `mongodb://${config_1.default.MLAB_USER}:${config_1.default.MLAB_PASSWORD}@ds217349.mlab.com:17349/visitor-manager`;
    let localUri = "mongodb://localhost:27017/inno-registry";
    let connectionUri = process.env.NODE_ENV == "production" ? remoteUri : localUri;
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
//# sourceMappingURL=mongoose.js.map