var express = require("express");
var fs = require("fs");
var qs = require("querystring");
var app = express();
var router = express.Router();
var mysql = require("mysql");
var path = require("path");

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

router.post("/", function (request, response) {
  var post = request.body;
  var title = post.title;
  var comment = post.comment;
  console.log(title);

  var query = `INSERT INTO \`commentData\` VALUES (NULL,'${request.cookies.User}','${title}','${comment}', now());`;
  connection.query(query,function(error,results,fields){
    if(error){
      console.log(error);
    }
    else{
      console.log('답변 생성 완료');
      response.redirect('../');
    }
  });
});

module.exports = router;