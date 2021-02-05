const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");

module.exports.signIn = function(req, res){
  const response = {status: 400, message: {message: "Email or password is invalid."}};
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  if (!req.body || !email || !password) {
    res.status(response.status).json(response.message);
    return;
  }
  User.findOne({email: email}).exec(function(err, user){
    if (err) {
      response.status = 500;
      response.message = err;
    }
    if (user) {
      if(bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({full_name: user.fullName}, "cs572", {expiresIn: 3600});
        response.status = 200;
        response.message = {token: token};
      }
      res.status(response.status).json(response.message);
    }
  });
}

module.exports.verifyToken = function(req, res){

}