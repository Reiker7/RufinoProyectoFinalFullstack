const { User } = require("../models/user");
const Joi = require("joi");
const config = require("config");
const bcrypt = require("bcrypt");
const validator = require("../middleware/joiValidator");
const express = require("express");
const router = express.Router();

const reqSchema = Joi.object({
  nickname: Joi.string()
    .required()
    .messages({ "any.required": `El campo "nickname" es requerido` }),
  password: Joi.string()
    .required()
    .messages({ "any.required": `El campo "password" es requerido` }),
});

router.post("/", validator(reqSchema), async (req, res) => {
  let user = await User.findOne({ nickname: req.body.nickname });
  if (!user) return res.status(400).send("nickname y password invalidos");

  const isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) return res.status(400).send("nickname y password invalidos");
  
  const token = user.generateToken();
  const {nickname , userNickGame } = user
  const registro = {nickname,userNickGame,token}
  res
  .header("x-auth-token", token)
  // .header("Access-Control-Expose-Headers", "x-auth-token")
  .send(registro);
});

module.exports = router;
