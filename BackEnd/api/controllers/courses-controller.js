const mongoose = require("mongoose");
const Course = mongoose.model("Course");

module.exports.register = function(req, res){
  
}

module.exports.getCourses = function(req, res){
  Course.find().exec(function(err, courses){
    const response = {status: 200, message: courses};
    if (err){
      response.status = 500;
      response.message = err;
    }
    res.status(response.status).json(response.message);
  })
}

module.exports.addCourse = function(req, res){
  Course.create({
    name: req.body.name,
    code: req.body.code
  }).exec(function(err, createdCourse){
    const response = {status: 201, message: createdCourse};
    if (err){
      response.status = 500;
      response.message = err;
    }
    res.status(response.status).json(response.message);
  })
}

module.exports.getCourse = function(req, res){
  Course.findById(req.params.id).exec(function(err, course){
    const response = {status: 200, message: course};
    if (err){
      response.status = 500;
      response.message = err;
    }
    if (!course){
      response.status = 404;
      response.message = {message: "Course ID is invalid."};
    }
    res.status(response.status).json(response.message);
  })
}

module.exports.updateCourse = function(req, res){
  Course.findById(req.params.id).exec(function(err, course){
    const response = {status: 200, message: course};
    if (err){
      response.status = 500;
      response.message = err;
    }
    if (!course){
      response.status = 404;
      response.message = {message: "Course ID is invalid."};
    }
    if (response.status != 200) {
      res.status(response.status).json(response.message);
      return;
    }
    course.save({
      name: req.body.name,
      code: req.body.code
    }, function(updatedErr, updatedCourse){
      if (updatedErr){
        response.status = 500;
        response.message = err;
      } else {
        response.message = updatedCourse;
      }
      res.status(response.status).json(response.message);
    });
  });
}

module.exports.deleteCourse = function(req, res){
  Course.findByIdAndDelete(req.params.id).exec(function(err, course){
    const response = {status: 200, message: {message: "Deleted course successfully."}};
    if (err){
      response.status = 500;
      response.message = err;
    }
    if (!course){
      response.status = 404;
      response.message = {message: "Course ID is invalid."};
    }
    res.status(response.status).json(response.message);
  })
}