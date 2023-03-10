var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var cookieParser = require("cookie-parser");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hong6376",
  database: "buskerbuskerData",
  insecureAuth: true,
});

// router.use(cookieParser);

router.use(function (req, res, next) {
  next();
});

router.get("/", function (req, res) {
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
            #main>a{
              text-decoration: none;
              font-size: 50px;
              color: #FF7B54;
          }
          #space{
              height: 20px;
          }
    
            
        </style>
    </head>
    
    <body>
        <div id = 'main'><a href="/">BUSKERBUSKER</a></div>
        <div id = 'space'></div>
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
        // ???????????? ?????? ??????
        console.log("????????? ??????");
        res.redirect("/login");
      } else {
        if (pwd == results[0].password) {
          // password
          console.log("????????? ??????");
          console.log("????????? id :", id); // ?????????
          res.cookie("User", id, {
            maxAge: 60 * 60 * 1000,
            httpOnly: true,
            path: "/",
          });
          res.redirect("../");
        } else {
          console.log("???????????? ??????");
          res.redirect("/login");
        }
      }
    }
  });
});

module.exports = router;
