const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  code: {
    type: String,
    require: true,
    unique: true
  }
});

mongoose.model("Course", courseSchema, "courses");