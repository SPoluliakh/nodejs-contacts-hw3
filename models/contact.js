const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contactDbSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
      unique: [true, " name must be unique"],
    },
    email: {
      type: String,
      required: [true, "Set email for contact"],
    },
    phone: {
      type: String,
      required: [true, "Set phone for contact"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const Contact = model("contact", contactDbSchema);

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const contactSchemaFavorite = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  Contact,
  contactSchema,
  contactSchemaFavorite,
};
