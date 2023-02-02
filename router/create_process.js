var express = require("express");
var app = express();
var router = express.Router();
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

router.post('/', function (request, response) {
  var post = request.body;
  var title = post.title; // Q1
  var description = post.description; //Question 1
  
  var query = `INSERT INTO \`noticeData\` VALUES (NULL,'${request.cookies.User}','${title}','${description}', now());`;
  connection.query(query,function(error,results,fields){
    if(error){
      console.log(error);
    }
    else{
      console.log('질문글 생성 완료');
      response.redirect('../');
    }
  });
});

module.exports = router;



