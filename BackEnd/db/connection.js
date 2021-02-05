const mongoose = require("mongoose");
const dbURL = "mongodb://localhost:27017/SchoolDB"

mongoose.connect(dbURL, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on("connected", function(){
  console.log("MongoDB connected.");
});
mongoose.connection.on("disconnected", function(){
  console.log("MongoDB disconnected.");
});
mongoose.connection.on("error", function(err){
  console.log("MongoDB error: ", err);
});

process.on("SIGINT", function() {
  mongoose.connection.close(function(){
    console.log("Mongo disconnected by app termination");
    process.exit(0);
  });
})
process.on("SIGTERM", function() {
  mongoose.connection.close(function(){
    console.log("Mongo disconnected by app termination");
    process.exit(0);
  });
})
process.once("SIGUSR2", function() {
  mongoose.connection.close(function() {
    console.log("Mongoose disconnected by app termination");
    process.kill(process.pid, "SIGUSR2");
  });
})

require("./models/course");
require("./models/user");