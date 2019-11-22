"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Host = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter full name"],
        index: true
    },
    email: {
        type: String,
        required: [true, "Please enter email"],
        unique: true
    },
    phone: {
        type: String,
        required: [true, "Please enter phone number"]
    }
}, {
    timestamps: true
});
exports.default = mongoose.model("host", Host);
//# sourceMappingURL=Host.js.map