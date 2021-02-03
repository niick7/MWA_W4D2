const moongose = require("mongoose");
const dbURL = "mongodb://localhost:27017/SchoolDB"

moongose.connect(dbURL, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true});

moongose.connection.on("connected", function(){
  console.log("MongoDB connected.");
});
moongose.connection.on("disconnected", function(){
  console.log("MongoDB disconnected.");
});
moongose.connection.on("error", function(err){
  console.log("MongoDB error: ", err);
});

require("./models/user");
require("./models/course");