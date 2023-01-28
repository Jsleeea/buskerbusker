var express = require("express");
var fs = require("fs");
var qs = require("querystring");
var app = express();
var router_mainPage = require("./router/main_page");
var router_createPage = require("./router/create_page");

// var template = require('./lib/template.js');

app.listen(3000, () => {
  console.log("listen to 3000");
});

app.use("/", router_mainPage);
app.use("/create", router_createPage);

/*
app.use((req, res, next) => {
  res.status(/n404).send("Not Found");
});
*/
