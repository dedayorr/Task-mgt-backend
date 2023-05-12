const mongoose = require("mongoose");
const Joi = require("joi");
const { string } = require("joi");

const UserSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    phoneNumber: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);

const userInputValidator = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  phoneNumber: Joi.number().required(),
});

module.exports = { User, userInputValidator };
