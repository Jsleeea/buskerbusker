const { response, request } = require("express");
var express = require("express");
var router = express.Router();
//var router = express.Router({ mergeParams: true });
var template = require("../lib/template.js");
var fs = require("fs");
var path = require("path");

router.use(function (req, res, next) {
  next();
});

router.get("/:pageID", function (request, response) {
  fs.readdir("./data/noticeData", function (err, filelist) {
    var filteredId = path.parse(request.params.pageID).base;
    fs.readdir( `./data/${filteredId}/answerData`,function (err, answer_filelist) { //여기서 오류
        fs.readFile(
          `./data/noticeData/${filteredId}`,
          "utf-8",
          function (err, description) {
            var title = request.params.pageID;
            var list = template.list(filelist);
            var answer_list = template.answer_list(answer_filelist);
            var html = template.HTML(
              title,
              list,
              `
            <div>답변:</div>
            ${answer_list}
            <a href='/answer/${filteredId}'>답변하기</a>`,
              `<h2>${title}</h2>${description}<br><br>`
            );
            response.send(html);
          }
        );
      }
    );
  });
});

/*
router.get("/:pageID", function (request, response) {
  fs.readdir("./data/noticeData", function (err, filelist) {
    var filteredId = path.parse(request.params.pageID).base;

    fs.readFile(
      `./data/noticeData/${filteredId}`,
      "utf-8",
      function (err, description) {
        var title = request.params.pageID;
        var list = template.list(filelist);
        var html = template.HTML(
          title,
          list,
          `
          <div>답변:</div>
          <a href='/answer/${filteredId}'>답변하기</a>`,
          `<h2>${title}</h2>${description}<br>`
        );
        response.send(html);
      }
    );
  });
});
*/
module.exports = router;
