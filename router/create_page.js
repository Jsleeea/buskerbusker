var express = require("express");
var fs = require("fs");
var qs = require("querystring");
var app = express();
var router = express.Router();
// var template = require('./lib.template.js');
/*
router.use(function (req, res, next) {
  next();
});
*/

router.get("/create", function (req, res) {
  var title = "Welcome";
  var html = `
    <!doctype html>
    <html>
      <head>
        <title>BUSKERBUSKER - Welcome</title>
        <meta charset="utf-8">
      </head>
    <body>
      <h1><a href="index.html">BUSKER_BUSKER 질문 게시판</a></h1>
      <form action="/create_process" method="post">
      <p><input type="text" name="title" placeholder="title"></p>
      <p>
        <textarea name="description" placeholder="description"></textarea>
      </p>
      <p>
        <input type="submit">
      </p>
    </form>
    </body>
    </html>
    `;
  res.send(html);
});

app.post("/create_process", function (request, response) {
  var body = "";
  request.on("data", function (data) {
    body = body + data;
  });
  request.on("end", function () {
    var post = qs.parse(body);
    var title = post.title;
    var description = post.description;
    fs.writeFile(`data/${title}`, description, "utf8", function (err) {
      response.writeHead(302, { Location: `/?id=${title}` });
      response.end();
    });
  });
});
module.exports = router;
