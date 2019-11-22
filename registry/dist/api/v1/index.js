"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const records_1 = require("./records");
const hosts_1 = require("./hosts");
exports.default = (app) => {
    app.use("/api/v1/records", records_1.default);
    app.use("/api/v1/hosts", hosts_1.default);
};
//# sourceMappingURL=index.js.map