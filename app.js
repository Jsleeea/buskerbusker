var express = require("express");
var fs = require("fs");
var qs = require("querystring");

var app = express();
var router_mainPage = require("./router/main_page");
var router_displayPage = require("./router/noticeDisplay");
var router_myPage = require("./router/myPage");
var router_createPage = require("./router/create_page");
var router_createProcess = require("./router/create_process");
var router_answerPage = require("./router/answer_page");
var router_answerProcess = require("./router/answer_process");
var router_loginPage = require("./router/login");
var router_registerPage = require("./router/register");
//var router = express.Router({ mergeParams: true });
// var template = require('./lib/template.js');

app.listen(3000, () => {
  console.log("listen to 3000");
});

app.use("/", router_mainPage);
app.use("/myPage", router_myPage);
app.use("/create", router_createPage);
app.use("/create_process", router_createProcess);
app.use("/answer", router_answerPage);
app.use("/answer_process", router_answerProcess);
app.use("/page", router_displayPage);
app.use("/login", router_loginPage);
app.use("/register", router_registerPage);

/*
app.use((req, res, next) => {
  res.status(/n404).send("Not Found");
});
*/
/*
fs.readdir("./data", function (error, filelist) {
  app.use("/page/:pageId", router_displayPage);
});
*/
// 흠..