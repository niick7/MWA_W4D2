const bcrypt = require("bcrypt-nodejs");

module.exports.signUp = function(req, res){
  console.log(req.body);
  const newUser = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
    fullName: req.body.fullName
  }
}