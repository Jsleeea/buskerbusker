const { response, request } = require("express");
var express = require("express");
var router = express.Router();
var template = require("../lib/template.js");
var fs = require("fs");
var path = require("path");
var mysql = require("mysql");
const e = require("express");
const { fileURLToPath } = require("url");

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

connection.connect();

router.get("/:pageID", function (req, res) {
  var filteredId = path.parse(req.params.pageID).base;
  console.log(path.parse(req.params.pageID));
  var query = `select * from noticedata where title = '${filteredId}';`;
  var query_2 = `select title from noticedata;`;
  var query_3 = `select * from commentdata where noticetitle = '${filteredId}';`;
  var query_4 = `select num from noticedata where title = 'HELLO'`;

  connection.query(query, function (error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      connection.query(query_2, function (error_2, results_2, fields_2) {
        if (error_2) {
          console.log(error_2);
        } else {
          connection.query(query_3, function (error_3, results_3, fields_3) {
            if (error_3) {
              console.log(error_3);
            } else {
              var title = results[0].title;
              var description = results[0].text;
              var list = template.list(results_2);
              var answer_list = template.answer_list(results_3);
              var Delete = ``;

              if (req.cookies.User == results[0].author) {
                Delete = `
                <input type="submit" value="delete">
                <input type="hidden" name="title" value=${title}>
                `;
              }
              /*
              var html = template.notice_HTML(
                title,
                "",

                `
               <form action="/delete_process" method="post">
                 ${Delete}
               </form><br><br>

                <div>답변:</div>
                ${answer_list}
                <a href='/answer/${filteredId}'>답변하기</a>
                `,
                `<h2>${title}</h2>${description}<br><br>`,
                ``
              );
              */

              var html = `
             <!doctype html>
<html>

<head>
  <title>WEB1 - ${title}</title>
  <meta charset="utf-8">
  <style>
    * {
      padding: 0;
      margin: 0;
      border: none;
    }
    #notice_box{
      padding: 0px 20px 0px 20px;
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

    #main {
      text-decoration: none;
      font-weight: bold;
      font-size: 50px;
      color: #FF7B54;
    }

    #describe {
      margin: 20px 0px 30px 0px;
    }

    .q_a{
      font-weight: bold;
      font-size: 35px;
      color: #FF7B54;
    }
    #answer{
      font-weight: bold;
      font-size: 22px;
      color: #FF7B54;
    }

    #title_ {
      font-weight: bold;
      font-size: 25px;
    }
    #answer_btn{
      text-decoration: none;
      width: 100%;
      color: white;
                height: 48px;
                padding: 0 10px;
                box-sizing: border-box;
                margin-bottom: 16px;
                border-radius: 6px;
                background-color: #FF7B54;
    }
    #answer_box{
      margin: 50px 0px 0px 0px;
      padding: 50px 0px 0px 0px;
    }
  </style>
</head>

<body>
  <div id='notice_box'>

    <h1><a id='main' href="/">BUSKERBUSKER</a></h1>
    <div id='describe'>
      <span class='q_a'>Q</span>
      <span id='title_'>${title}</span>
      <div>
        ${description}<br><br>
      </div>
    </div>
    <div id ='answer_box'>
      <div id ='answer'>답변:</div>
      ${answer_list}
    </div>
    <div><br>

      <a id="answer_btn" href='/answer/${filteredId}'>답변하기</a>
      <form action="/delete_process" method="post">
        ${Delete}
      </form><br><br>
    </div>
  </div>
</body>

</html>
             `;
              res.send(html);
            }
          });
        }
      });
    }
  });
});

module.exports = router;
