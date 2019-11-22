"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Entry = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter full name"],
        index: true
    },
    email: {
        type: String,
        required: [true, "Please enter email"]
    },
    phone: {
        type: String,
        required: [true, "Please enter phone number"]
    },
    address: {
        type: String,
        required: [true, "Please enter address"],
        default: ""
    },
    archive: {
        type: Boolean,
        default: false
    },
    checkin: {
        type: Date
    },
    checkout: {
        type: Date,
        default: ""
    },
    host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "host",
        required: true
    }
}, {
    timestamps: true
});
Entry.pre("find", function (next) {
    this.populate("host");
    next();
});
exports.default = mongoose.model("entry", Entry);
//# sourceMappingURL=Entry.js.map