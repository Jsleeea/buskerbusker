var express = require("express");
var fs = require("fs");
var qs = require("querystring");
var app = express();
var router = express.Router();
var mysql = require("mysql");
var path = require("path");

//var cookieParser = require('cookie-parser');
// var template = require('./lib.template.js');

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
//router.use(cookieParser());

router.post("/", function (request, response) {
  // var filteredId = path.parse(request.params.pageID).base;
  var title = request.title;
  var post = request.body;
  var comment = post.comment;
  console.log(title);
  response.redirect("../");
  /*
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
  */
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
