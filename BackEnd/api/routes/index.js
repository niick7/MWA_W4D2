const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users-controller");
const coursesController = require("../controllers/courses-controller");

router.route("/users").post(usersController.signUp);
router.route("/users/:userId/courses").post(coursesController.register);

module.exports = router;