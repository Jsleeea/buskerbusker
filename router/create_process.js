var express = require("express");
var fs = require("fs");
var qs = require("querystring");
var app = express();
var router = express.Router();
// var template = require('./lib.template.js');

router.use(function (req, res, next) {
  next();
});

router.post("/", function (request, response) {
  var post = request.body;
  var title = post.title; // Q1
  var description = post.description; //Question 1

  fs.mkdirSync(`./data/${title}`);
  //fs.mkdirSync(`./data/${title}/${title}`);
  fs.mkdirSync(`./data/${title}/answerData`);

  fs.writeFile(
    `./data/noticeData/${title}`,
    description,
    "utf8",
    function (err) {
      //response.writeHead(302, { Location: `/?id=${title}` });
      response.writeHead(302, { Location: "/" });
      response.end();
    }
  );
});
/*
router.post("/", function (request, response) {
  var post = request.body;
  var title = post.title;// Q1 
  var description = post.description;//Question 1
  fs.writeFile(
    `./data/noticeData/${title}`,
    description,
    "utf8",
    function (err) {
      //response.writeHead(302, { Location: `/?id=${title}` });
      response.writeHead(302, { Location: "/" });
      response.end();
    }
  );
});
*/
module.exports = router;
