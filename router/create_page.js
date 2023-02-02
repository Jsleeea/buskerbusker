var express = require("express");
var fs = require("fs");
var qs = require("querystring");
var app = express();
var router = express.Router();
var cookieParser = require('cookie-parser');
var mysql = require('mysql');

router.use(function (req, res, next) {
  next();
});

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'hong6376', // 본인 mySql Password 사용
  database : 'buskerbuskerData',
  insecureAuth: true
});

connection.connect();

router.use(cookieParser());

router.get("/", function (req, res) {

  if(req.cookies.User == undefined){
    res.redirect("../");
    console.log("먼저 로그인 하세요.");
  }

  else{
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
        <form action="/create" method="post">
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

router.post("/", function (request, response) {
  var post = request.body;
  var title = post.title; // Q1
  var description = post.description; //Question 1
  
  var query = `INSERT INTO \`noticeData\` VALUES (NULL,'${req.cookies.User}','${title}','${description}', now());`;
  connection.query(query,function(error,results,fields){
    if(error){
      console.log(error);
    }
    else{
      console.log('질문글 생성 완료');
    }
  });
  /*
  fs.writeFile(
    `./data/${title}/answerData/${description}`,
    description,
    "utf8",
    function (err) {
      //response.writeHead(302, { Location: `/?id=${title}` });
      response.writeHead(302, { Location: `/page/${title}` });
      response.end();
    }
  );
  */
});

module.exports = router;