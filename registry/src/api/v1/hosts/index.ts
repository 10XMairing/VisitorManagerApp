import { Router } from "express";
import { Container } from "typedi";
import ControllerService from "../../../controller/hosts";
import { celebrate, Joi } from "celebrate";
const Controller = Container.get(ControllerService);
const router = Router();

router.get("/", (req, res, next) => {
  Controller.getAllHosts(req, res, next);
});
router.delete(
  "/",
  celebrate({
    body: Joi.object().keys({
      ids: Joi.array().items(Joi.string())
    })
  }),
  (req, res, next) => {
    Controller.deleteHosts(req, res, next);
  }
);

router.post(
  "/",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required(),
      phone: Joi.string().required()
    })
  }),
  (req, res, next) => {
    Controller.postAddHost(req, res, next);
  }
);

export default router;
