const express = require("express");

const { contactsControllers: cntr } = require("../../controllers");
const { validation, cntrlWrap } = require("../../middlewars");
const {
  contactSchema,
  contactSchemaFavorite,
} = require("../../models/contact");

const contactsRouter = express.Router();

contactsRouter.get("/", cntrlWrap(cntr.getAll));

contactsRouter.get("/:id", cntrlWrap(cntr.getById));

contactsRouter.post("/", validation(contactSchema), cntrlWrap(cntr.add));

contactsRouter.delete("/:id", cntrlWrap(cntr.remove));

contactsRouter.put("/:id", validation(contactSchema), cntrlWrap(cntr.update));

contactsRouter.patch(
  "/:id/favorite",
  validation(contactSchemaFavorite),
  cntrlWrap(cntr.updateFavorite)
);

module.exports = contactsRouter;
