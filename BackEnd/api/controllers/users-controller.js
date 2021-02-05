const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcrypt-nodejs");

module.exports.signUp = function(req, res){
  const newUser = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
    fullName: req.body.fullName
  }
  console.log(newUser);
  User.create(newUser, function(err, createdUser){
    const response = {status: 201, message: createdUser};
    if (err) {
      response.status = 500;
      response.message = {message: err};
    }
    res.status(response.status).json(response.message);
  });
}