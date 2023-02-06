var express = require("express");
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
        ``,
        `
         <a style="text-decoration: none; color: #fff; font-size: 14px;background-color: #FF7B54;margin-top: 20px; border-radius: 6px;" href="/create">질문 등록하기</a>
         
         <br>
         USER : <a href="/myPage/${request.cookies.User}">${request.cookies.User}</a>
        `,
        `
        <a style="text-decoration: none; color:#FFB26B;" href="/login">로그인</a>
        <a style="text-decoration: none; color:#FFB26B;" href="/register">회원가입</a>
        <a style="text-decoration: none; color:#FFB26B;" href="/find">비밀번호 찾기</a>
        `
      );
      response.send(html);
    }
  });
});

module.exports = router;
