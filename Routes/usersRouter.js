const express = require("express");

const NewUsersRegistration = require("../Controller/userscontrollers");

const router = express.Router();

router.route("/register-users").post(NewUsersRegistration);

module.exports =  router