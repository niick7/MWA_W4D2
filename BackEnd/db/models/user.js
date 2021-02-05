require("./course");

const mongoose = require("mongoose");

const courseSchema = mongoose.model("Course").schema;

const userSchema = mongoose.Schema({
  userType: {
    type: String,
    required: true,
    "default": "Student"
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  courses: [courseSchema]
})

mongoose.model("User", userSchema, "users");