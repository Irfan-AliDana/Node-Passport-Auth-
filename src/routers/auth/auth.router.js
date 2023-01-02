const express = require("express");

const authRouter = express.Router();

const { login, register } = require("../../controllers/auth/auth.controller");

authRouter.post("/register", register);

authRouter.post("/login", login);

module.exports = authRouter;
