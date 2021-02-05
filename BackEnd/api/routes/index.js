const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users-controller");
const coursesController = require("../controllers/courses-controller");
const authenticationController = require("../controllers/authentication-controller");

router.route("/sign_up").post(usersController.signUp);
router.route("/users/:userId/courses/register").post(coursesController.register);

router.route("/sign_in").post(authenticationController.signIn);

module.exports = router;