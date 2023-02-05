var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var cookieParser = require("cookie-parser");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "junsung",
  database: "buskerbuskerData",
  insecureAuth: true,
});

// router.use(cookieParser);

router.use(function (req, res, next) {
  next();
});

router.get("/", function (req, res) {
  /*
  var template = `<!DOCTYPE html>
    <html>
        <body>
            <form action='/login' method='post'>
                ID : <input type='text' name='id'><br>
                PWD : <input type='password' name='pwd'><br>
                <input type='submit' value='login'>
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
    
            
        </style>
    </head>
    
    <body>
        <div class="login-wrapper">
            <h2>Login</h2>
            <form method="post" action="/login" id="login-form">
                <input type="text" name="id" placeholder="ID">
                <input type="password" name="pwd" placeholder="Password">
                <input type="submit" value="login">
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
  var id = body.id;
  var pwd = body.pwd;

  var query = `select password from userdata where id= "${id}";`;

  connection.query(query, function (error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      if (results.length == 0) {
        // 아이디가 존재 안함
        console.log("아이디 틀림");
        res.redirect("/login");
      } else {
        if (pwd == results[0].password) {
          // password
          console.log("로그인 성공");
          console.log("로그인 id :", id); // 확인용
          res.cookie("User", id, {
            maxAge: 60 * 60 * 1000,
            httpOnly: true,
            path: "/",
          });
          res.redirect("../");
        } else {
          console.log("비밀번호 틀림");
          res.redirect("/login");
        }
      }
    }
  });
});

module.exports = router;
