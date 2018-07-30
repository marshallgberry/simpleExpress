var express = require("express");
var server = express();
var PORT = 8080;

server.get("/", function(req, res) {
    res.send("What it do?!!");
  });

  server.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });