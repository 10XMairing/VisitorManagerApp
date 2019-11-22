import { Router } from "express";
import { Container } from "typedi";
import ControllerService from "../../../controller/entry";

let Controller = Container.get(ControllerService);

const router = Router();
// celebrate -- joi middleware
import { celebrate, Joi } from "celebrate";
import { checkUser } from "../../../middlewares";

router.get("/", (req, res, next) => {
  Controller.getAllEntries(req, res, next);
});
router.get("/archive", (req, res, next) => {
  Controller.getArchivedEntries(req, res, next);
});

router.post(
  "/",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      address: Joi.string().required(),
      email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required(),
      phone: Joi.string().required(),
      host: Joi.object()
        .keys({
          name: Joi.string().required(),
          email: Joi.string()
            .email({ minDomainSegments: 2 })
            .required(),
          phone: Joi.string().required()
        })
        .required()
    })
  }),
  (req, res, next) => {
    Controller.postAddEntry(req, res, next);
  }
);

router.patch("/checkout/:id", (req, res, next) => {
  Controller.patchUpdateCheckout(req, res, next);
});

router.patch(
  "/archive/?(restore=:restore)?",
  celebrate({
    body: Joi.object().keys({
      ids: Joi.array().items(Joi.string())
    })
  }),
  (req, res, next) => {
    Controller.patchArchiveEntries(req, res, next);
  }
);
router.delete(
  "/",
  celebrate({
    body: Joi.object().keys({
      ids: Joi.array().items(Joi.string())
    })
  }),
  (req, res, next) => {
    Controller.deleteEntries(req, res, next);
  }
);

export default router;
