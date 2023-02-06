var express = require("express");
var app = express();

var router_mainPage = require("./router/main_page");
var router_displayPage = require("./router/noticeDisplay");
var router_myPage = require("./router/myPage");
var router_createPage = require("./router/create_page");
var router_createProcess = require("./router/create_process");
var router_deleteProcess = require("./router/delete_process");
var router_answerPage = require("./router/answer_page");
var router_answerProcess = require("./router/answer_process");
var router_loginPage = require("./router/login");
var router_registerPage = require("./router/register");
var router_findPage = require("./router/find_page");
var router_findProcess = require("./router/find_process");
var router_reportProcess = require("./router/report_process");


app.listen(3000, () => {
  console.log("listen to 3000");
});

app.use("/", router_mainPage);
app.use("/myPage", router_myPage);
app.use("/create", router_createPage);
app.use("/create_process", router_createProcess);
app.use("/delete_process", router_deleteProcess);
app.use("/answer", router_answerPage);
app.use("/answer_process", router_answerProcess);
app.use("/page", router_displayPage);
app.use("/login", router_loginPage);
app.use("/register", router_registerPage);
app.use("/find", router_findPage);
app.use("/find_process", router_findProcess);
app.use("/report_process", router_reportProcess);