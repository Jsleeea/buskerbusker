var express = require("express");
var fs = require("fs");
var template = require("../lib/template.js");
var router = express.Router();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var mysql = require("mysql");

router.use(function (req, res, next) {
  next();
});

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hong6376",
  database: "buskerbuskerData",
  insecureAuth: true,
});

connection.connect();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());

//

router.get("/", function (request, response) {
  var query = `select title from noticedata;`;

  connection.query(query, function (error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      var title = "Web";
      var description = "this is the main page";
      var list = template.list(results);
      var html = template.HTML(
        title,
        list,
        `<h2>${title}</h2>${description}`,
        `
         <a href="/create">질문 등록하기</a>
         <a href="/login">로그인</a>
         <a href="/register">회원가입</a>
         <br>
         USER : ${request.cookies.User}
        `
      );
      response.send(html);
    }
  });
});

module.exports = router;
// 2023_02_02 mysql noticeData list를 어떻게 받을 것인가? __ complete