var express = require('express')
var app = express()
var url = require("url");
var path = require("path");
 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
  //res.send(url.parse(req.url).pathname);
})
app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, "/about.html"));
  //res.send(url.parse(req.url).pathname);
})
 
app.listen(3000)