"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.default = () => {
    let remoteUri = "mongodb://tenx:10xxpassword@ds217349.mlab.com:17349/visitor-manager";
    let localUri = "mongodb://localhost:27017/inno-registry";
    return new Promise((resolve, reject) => {
        mongoose
            .connect(remoteUri, {
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