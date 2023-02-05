var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var cookieParser = require("cookie-parser");

router.use(function (req, res, next) {
  next();
});

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "junsung",
  //password: "junsung", // 본인 mySql Password 사용
  database: "buskerbuskerData",
  insecureAuth: true,
});

router.get("/", function (req, res) {
  /*
  var template = `<!DOCTYPE html>
    <html>
        <body>
            <form action='/register' method='post'>
                ID : <input type='text' name='register_id'><br>
                PWD : <input type='password' name='register_pw'><br>
                Question : What is your middle school? <br>
                Answer : <input type='text' name='register_Q'><br>
                <input type='submit' value='register'>
            </form>
        </body>
    </html>`;
    */
  var template = `<!DOCTYPE html>
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
              justify-content: center;
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
          .login-wrapper>h1 {
              font-size: 50px;
              color: #FF7B54;
              margin-bottom: 20px;
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
              display: block;
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
          #main>a{
              text-decoration: none;
              font-size: 50px;
              color: #FF7B54;
          }
          #space{
              height: 30px;
          }
  
          
      </style>
  </head>
  
  <body>
      <div id = 'main'><a href="/">BUSKERBUSKER</a></div>
      <div id = 'space'></div>
      <div class="login-wrapper">
          <h2>Register</h2>
          <form action="/register"method="post" id="login-form">
              <input type="text" name="register_id" placeholder="ID">
              <input type="password" name="register_pw" placeholder="Password">
              <input type='text' name='register_Q' placeholder="Question : What is your middle school?"><br>
              <input type="submit" value="register">
          </form>
      </div>
  </body>
  
  </html>`;
  res.writeHead(200, { ContentType: "text/html" });
  res.write(template);
  res.end();
});

connection.connect();

router.post("/", function (req, res) {
  var body = req.body;
  var id = body.register_id;
  var pw = body.register_pw;
  var q = body.register_Q;

  var query = `
   INSERT INTO \`userData\` VALUES (NULL,'${id}','${pw}','${q}');
   `;

  connection.query(query, function (error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log("회원가입 성공");
    }
  });

  res.redirect("/");
});

module.exports = router;
