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
});

module.exports = router;
