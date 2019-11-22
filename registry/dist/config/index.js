"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
process.env.NODE_ENV = process.env.NODE_ENV || "development";
exports.default = {
    BASE_URL: process.env.BASE_URL || "http://localhost",
    PORT: process.env.PORT || 3000,
    logs: {
        level: process.env.LOG_LEVEL || "silly"
    },
    SALT_ROUNDS: 12,
    JWT_AUTH_USER: process.env.JWT_AUTH_USER || "testdev_jwt_user",
    JWT_AUTH_ADMIN: process.env.JWT_AUTH_ADMIN || "testdev_jwt_admin",
    GMAIL_OAUTH: {
        user: "tenx.devs@gmail.com",
        type: "oauth2",
        cliendid: "950339655299-ug2081au8iivjgk1ukiqc4fj0ru63q5p.apps.googleusercontent.com",
        client_secret: "uG-BAV6yKIxU-VsRJYdFGLQU ",
        refresh_token: "1//04Wtm-nwf1U_xCgYIARAAGAQSNwF-L9IrUBRfF7ahvaQ4wFi9fhLqunC9C6UNjspOyTQUUJQ9As9pN5eGUAK-MGa3twOw1EJ1DRs",
        redirect_url: "https://developers.google.com/oauthplayground/"
    }
};
//# sourceMappingURL=index.js.map