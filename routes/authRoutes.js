// import express
const express = require("express")

const RegisterUser = require("../Controllers/authController")

// invoke the express router function
const authRoutes = express.Router();

authRoutes.post("/register", RegisterUser);

module.exports = authRoutes;