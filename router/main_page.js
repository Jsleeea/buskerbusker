var express = require("express");
var fs = require("fs");
var template = require("../lib/template.js");
var router = express.Router();
// var template = require('./lib.template.js');

router.use(function (req, res, next) {
  next();
});

//
router.get("/", function (request, response) {
  fs.readdir("./data", function (error, filelist) {
    //filelist == mypage, notice;
    var title = "Web";
    var description = "this is the main page";
    var list = template.list(filelist);
    var html = template.HTML(
      title,
      list,
      `<h2>${title}</h2>${description}`,
      `<a href="/create">질문 등록하기</a>`
    );
    response.send(html);
  });
});
//
module.exports = router;
