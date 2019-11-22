"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typedi_1 = require("typedi");
const entry_1 = require("../../../controller/entry");
let Controller = typedi_1.Container.get(entry_1.default);
const router = express_1.Router();
// celebrate -- joi middleware
const celebrate_1 = require("celebrate");
router.get("/", (req, res, next) => {
    Controller.getAllEntries(req, res, next);
});
router.get("/archive", (req, res, next) => {
    Controller.getArchivedEntries(req, res, next);
});
router.post("/", celebrate_1.celebrate({
    body: celebrate_1.Joi.object().keys({
        name: celebrate_1.Joi.string().required(),
        address: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string()
            .email({ minDomainSegments: 2 })
            .required(),
        phone: celebrate_1.Joi.string().required(),
        host: celebrate_1.Joi.object()
            .keys({
            name: celebrate_1.Joi.string().required(),
            email: celebrate_1.Joi.string()
                .email({ minDomainSegments: 2 })
                .required(),
            phone: celebrate_1.Joi.string().required()
        })
            .required()
    })
}), (req, res, next) => {
    Controller.postAddEntry(req, res, next);
});
router.patch("/checkout/:id", (req, res, next) => {
    Controller.patchUpdateCheckout(req, res, next);
});
router.patch("/archive/?(restore=:restore)?", celebrate_1.celebrate({
    body: celebrate_1.Joi.object().keys({
        ids: celebrate_1.Joi.array().items(celebrate_1.Joi.string())
    })
}), (req, res, next) => {
    console.log(req.body);
    Controller.patchArchiveEntries(req, res, next);
});
router.delete("/", celebrate_1.celebrate({
    body: celebrate_1.Joi.object().keys({
        ids: celebrate_1.Joi.array().items(celebrate_1.Joi.string())
    })
}), (req, res, next) => {
    console.log(req.body);
    Controller.deleteEntries(req, res, next);
});
exports.default = router;
//# sourceMappingURL=index.js.map