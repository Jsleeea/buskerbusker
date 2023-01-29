var express = require('express');
var router = express.Router();
// var template = require('./lib.template.js');

router.use(function(req, res, next) {
  next();
});

router.get('/', function(req, res) {
  var html = 
    `
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
    `
  res.send(html);
});



module.exports = router;