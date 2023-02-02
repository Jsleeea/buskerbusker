var express = require("express");
var fs = require("fs");
var template = require("../lib/template.js");
var router = express.Router();
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');

router.use(function (req, res, next) {
  next();
});

router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());

//

router.get("/", function (request, response) {
  fs.readdir("./data/noticeData", function (error, filelist) {
    //filelist == mypage, notice;
    var title = "Web";
    var description = "this is the main page";
    var list = template.list(filelist);
    var html = template.HTML(
      title,
      list,
      `<h2>${title}</h2>${description}`,
      `
       <a href="/create">질문 등록하기</a>
       <a href="/login">로그인</a>
       <a href="/register">회원가입</a>
       <br>
       USER : ${request.cookies.User}
      `
    );
    console.log(request.cookies);
    response.send(html);
  });
});

// router.get('/:pageID', function(request, response) {
//   //fs.readdir('./data', function(error, filelist){
//      var filteredId = path.parse(request.params.pageID).base;
//      fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
//        var title = request.params.pageID;
//        var sanitizedTitle = sanitizeHtml(title);
//        var sanitizedDescription = sanitizeHtml(description, {
//          allowedTags:['h1']
//        });
//        var list = template.list(request.list);
//        var html = template.HTML(sanitizedTitle, list,
//          `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
//          ` <a href="/create">create</a>
//            <a href="/update/${sanitizedTitle}">update</a>
//            <form action="/delete_process" method="post">
//              <input type="hidden" name="id" value="${sanitizedTitle}">
//              <input type="submit" value="delete">
//            </form>`
//        );
//        response.send(html);
//        });
//   //});
//  });
//
module.exports = router;
