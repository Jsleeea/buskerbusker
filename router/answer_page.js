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
//Cannot POST /answer_process
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
          <form action="/answer_process" method="post">
          <p><input type="hidden" name="title" value =${filteredId}></p>
      <p>
        <textarea name="description" placeholder="답변 작성시 서비스 운영정책을 지켜주세요."></textarea>
      </p>
      <p>
        <input type="submit">
      </p>
    </form><br>
        `,
          `<h2>${title}</h2>${description}<br>`
        );
        response.send(html);
      }
    );
  });
});

module.exports = router;