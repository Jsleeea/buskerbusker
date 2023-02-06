var express = require("express");
var router = express.Router();
var cookieParser = require('cookie-parser');

router.use(function (req, res, next) {
  next();
});
router.use(cookieParser());

router.get("/:userID", function (req, res){
  if(req.cookies.User == undefined){
    res.send(`
      <script>alert('먼저 로그인 후 이용해주세요.')</script>
      <script>window.location=\"../\"</script>`
    );
  }
  else{
    var html = `
    <!doctype html>
    <html>
      <head>
        <title>${req.cookies.User}</title>
        <meta charset="utf-8">
      </head>
    <body>
      <h1><a href="/">${req.cookies.User}'s Page</a></h1>
      <ol>
        <li><a href="/notice">NOTICE</a></li>
        <li><a href="/myPage">MyPage</a></li>
        <li><a href="3.html">JavaScript</a></li>
      </ol>
      <h2>Hello ${req.cookies.User}</h2>
      <p>
      Nice to see you again!
      </p>
    </body>
    </html>
    `;
    res.send(html);
  }
});

module.exports = router;