var express = require("express");
var app = express();
var router = express.Router();
var cookieParser = require("cookie-parser");
var mysql = require("mysql");

router.use(function (req, res, next) {
  next();
});

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hong6376",
  database: "buskerbuskerData",
  insecureAuth: true,
});

connection.connect();

router.use(cookieParser());

router.get("/", function (req, res) {
  if (req.cookies.User == undefined) {
    res.send(`
      <script>alert('로그인 이후 이용해주세요')</script>
      <script>window.location=\"../\"</script>`
    );
  } else {
    var title = "Welcome";
    var html = `<!DOCTYPE html>
      <html>
      
      <head>
          <title>MY_PAGE</title>
          <meta charset="utf-8">
          <style>
              * {
                  padding: 0;
                  margin: 0;
                  border: none;
              }
      
              body {
                  height: 100vh;
                  display: flex;
                  flex-direction: column;
                 
                  justify-content: flex-start;
                  align-items: center;
                  font-size: 14px;
                  font-family: 'Roboto', sans-serif;
              }
      
              .login-wrapper {
                  width: 400px;
                  height: 350px;
                  padding: 40px;
                  box-sizing: border-box;
              }
      
              .login-wrapper>h2 {
                  font-size: 24px;
                  color: #FF7B54;
                  margin-bottom: 20px;
              }
      
              #login-form>input {
                  width: 100%;
                  height: 48px;
                  padding: 0 10px;
                  box-sizing: border-box;
                  margin-bottom: 16px;
                  border-radius: 6px;
                  background-color: #F8F8F8;
              }
      
              #login-form>input::placeholder {
                  color: #D2D2D2;
              }
      
              #login-form>input[type="submit"] {
                  color: #fff;
                  font-size: 16px;
                  background-color: #FF7B54;
                  margin-top: 20px;
              }
              #login-form>textarea {
                  width: 100%;
                  height: 200px;
                  padding: 0 10px;
                  box-sizing: border-box;
                  margin-bottom: 16px;
                  border-radius: 6px;
                  background-color: #F8F8F8;
              }
              #login-form>textarea::placeholder {
                  color: #D2D2D2;
              }
              #main>a{
                text-decoration: none;
                font-size: 50px;
                color: #FF7B54;
            }
            #space{
                height: 10px;
            }
      
              
          </style>
      </head>
      
      <body>
          <div id = 'main'><a href="/">BUSKERBUSKER</a></div>
          <div id = 'space'></div>
          <div class="login-wrapper">
              <h2>Q. question</h2>
              <form method="post" action="/create_process" id="login-form">
                  <input type="text" name="title" placeholder="title">
                  <textarea name="description" placeholder="description"></textarea>
                  <input type="submit">
              </form>
          </div>
      </body>
      
      </html>
      `;
    res.send(html);
  }
});

module.exports = router;
