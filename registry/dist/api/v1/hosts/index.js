"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typedi_1 = require("typedi");
const hosts_1 = require("../../../controller/hosts");
const celebrate_1 = require("celebrate");
const Controller = typedi_1.Container.get(hosts_1.default);
const router = express_1.Router();
router.get("/", (req, res, next) => {
    Controller.getAllHosts(req, res, next);
});
router.delete("/", celebrate_1.celebrate({
    body: celebrate_1.Joi.object().keys({
        ids: celebrate_1.Joi.array().items(celebrate_1.Joi.string())
    })
}), (req, res, next) => {
    Controller.deleteHosts(req, res, next);
});
router.post("/", celebrate_1.celebrate({
    body: celebrate_1.Joi.object().keys({
        name: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string()
            .email({ minDomainSegments: 2 })
            .required(),
        phone: celebrate_1.Joi.string().required()
    })
}), (req, res, next) => {
    Controller.postAddHost(req, res, next);
});
exports.default = router;
//# sourceMappingURL=index.js.map