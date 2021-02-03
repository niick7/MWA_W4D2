require("./course");

const mongoose = require("mongoose");

const courseSchema = mongoose.model("Course").schema;

const userSchema = mongoose.Schema({
  userType: {
    type: String,
    require: true,
    "default": "Student"
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  fullName: {
    type: String,
    require: true
  },
  image: {
    type: String,
    require: true
  },
  courses: [courseSchema]
})

mongoose.model("User", userSchema, "users");