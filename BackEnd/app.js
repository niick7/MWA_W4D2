require("./db/connection");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./api/routes");

app.set("port", 3000);

app.use(function(req, res, next){
  console.log(req.method, req.url);
  next();
})
app.use("/api", routes);
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

const server = app.listen(app.get("port"), function(){
  const port = server.address().port;
  console.log("Listening to port", port);
})