var express = require("express");
var router = express.Router();
var cookieParser = require('cookie-parser');
var template = require("../lib/template.js");
var mysql = require('mysql');

router.use(function (req, res, next) {
  next();
});
router.use(cookieParser());

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hong6376",
  database: "buskerbuskerData",
  insecureAuth: true,
});

connection.connect();

router.get("/:userID", function (req, res){
  if(req.cookies.User == undefined){
    res.send(`
      <script>alert('먼저 로그인 후 이용해주세요.')</script>
      <script>window.location=\"../\"</script>`
    );
  }
  else{
    var userId = req.cookies.User;
    var query = `select * from noticeData where author = "${userId}";`;
    
    if(userId == 'ADMIN'){
      query = `select * from noticeData where reported = TRUE;`;
    }

    connection.query(query, function(error, results, fields){
      if(error){
        console.log(error);
      }
      else{
        var title = `${userId}'s Page`;
        var list = template.list(results);
        var html = template.HTML(
          title,
          list,
          ``,
          `
          <a style="text-decoration: none; color: #fff; font-size: 14px;background-color: #FF7B54;margin-top: 20px; border-radius: 6px;" href="/create">질문 등록하기</a>
          `,
          `
          <a style="text-decoration: none; color:#FFB26B;"> ${userId}'s Page </a>
          `
        );
        res.send(html);
      }
    });
  }
});

module.exports = router;