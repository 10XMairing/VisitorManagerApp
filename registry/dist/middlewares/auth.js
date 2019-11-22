"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const config_1 = require("../config");
function checkUser(req, res, next) {
    const token = req.headers.authorization.split(" ")[1];
    try {
        let decoded = jwt.verify(token, config_1.default.JWT_AUTH_USER);
        req.userData = decoded;
        next();
    }
    catch (err) {
        return res.status(401).json({
            message: "User unauthorized"
        });
    }
}
exports.checkUser = checkUser;
//# sourceMappingURL=auth.js.map