require("./connection");
const bcrypt = require("bcrypt-nodejs");

const mongoose = require("mongoose");
const User = mongoose.model("User");
const Course = mongoose.model("Course");

// Create faculty
User.create({
  email: "faculty@miu.edu",
  password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10)),
  fullName: "MIU Faculty",
  userType: "Faculty"
});

// Create Courses
Course.create({name: "MPP", code: "CS401"});
Course.create({name: "WAP", code: "CS472"});
Course.create({name: "ASD", code: "CS525"});
Course.create({name: "Big Data", code: "CS522"});
Course.create({name: "MWA", code: "CS572"});
Course.create({name: "STC", code: "STC506"});