var express = require("express");
//var router = express.Router();
var router = express.Router({ mergeParams: true });
// var template = require('./lib.template.js');

router.use(function (req, res, next) {
  next();
});

// if pageId = 질문1
router.get("/", function (request, require) {
  //filelist = [ 'mypage', 'notice' ]
  fs.readdir("./data", function (error, filelist) {
    var filteredId = path.parse(request.params.pageId).base;
    fs.readFile(`data/${filteredId}`, "utf8", function (err, description) {
      var title = request.params.pageId;
      var sanitizedTitle = sanitizeHtml(title);
      var sanitizedDescription = sanitizeHtml(description, {
        allowedTags: ["h1"],
      });
      var list = template.list(filelist);
      var html = template.HTML(
        sanitizedTitle,
        list,
        `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
        ` <a href="/create">create</a>
          <a href="/update/${sanitizedTitle}">update</a>
          <form action="delete_process" method="post">
            <input type="hidden" name="id" value="${sanitizedTitle}">
            <input type="submit" value="delete">
          </form>`
      );
      response.send(html);
    });
  });
});

/*
router.get("/", function (req, res) {
  var html = `
    <!doctype html>
    <html>
      <head>
        <title>NOTICE_PAGE</title>
        <meta charset="utf-8">
      </head>
    <body>
      <h1><a href="/">NOTICE</a></h1>
      <ol>
        <li><a href="/notice">NOTICE</a></li>
        <li><a href="/myPage">MyPage</a></li>
        <li><a href="3.html">JavaScript</a></li>
      </ol>
      <h2>WEB</h2>
      <p>
      .This is Notice Page.
      </p>
    </body>
    </html>
    `;
  res.send(html);
});
*/
module.exports = router;
