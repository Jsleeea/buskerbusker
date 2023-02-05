var express = require("express");
var app = express();
var router = express.Router();
var cookieParser = require("cookie-parser");
var mysql = require("mysql");

router.use(function (req, res, next) {
  next();
});

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "junsung",
  database: "buskerbuskerData",
  insecureAuth: true,
});

connection.connect();

router.use(cookieParser());

router.get("/", function (req, res) {
  if (req.cookies.User == undefined) {
    res.redirect("../");
    console.log("먼저 로그인 하세요.");
  } else {
    var title = "Welcome";
    var html = `
      <!doctype html>
      <html>
        <head>
          <title>BUSKERBUSKER - Welcome</title>
          <meta charset="utf-8">
        </head>
      <body>
        <h1><a href="/">BUSKER_BUSKER 질문 게시판</a></h1>
        <form action='/create_process' method="post">
        <p><input type="text" name="title" placeholder="title"></p>
        <p>
          <textarea name="description" placeholder="description"></textarea>
        </p>
        <p>
          <input type="submit">
        </p>
      </form>
      </body>
      </html>
      `;
    res.send(html);
  }
});

module.exports = router;
