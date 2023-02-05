const { response, request } = require("express");
var express = require("express");
var router = express.Router();
var template = require("../lib/template.js");
var fs = require("fs");
var path = require("path");
//var mysql = require('mysql');

router.use(function (req, res, next) {
  next();
});

router.get("/:pageID", function (req, res) {
  var filteredId = path.parse(req.params.pageID).base;
  /*
  var html = `
      <!doctype html>
      <html>
        <head>
          <title>BUSKERBUSKER - Welcome</title>
          <meta charset="utf-8">
        </head>
      <body>
        <h1><a href="/page/${filteredId}">${filteredId}</a></h1>
        <form action='/answer_process' method="post">
        <p><input type="hidden" id="title" name="title" value="${filteredId}"></p>
        <p>
          <textarea name="comment" placeholder="comment"></textarea>
        </p>
        <p>
          <input type="submit">
        </p>
      </form>
      </body>
      </html>
      `;
      */
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
            #answer{
              text-decoration: none;
              color: #FFB26B
            }
              
          </style>
      </head>
      
      <body>
          <div id = 'main'><a href="/">BUSKERBUSKER</a></div>
          <div id = 'space'></div>
          <h1><a id ="answer" href="/page/${filteredId}">${filteredId}</a></h1>
          <div class="login-wrapper">
              
              <form action='/answer_process' method="post" id="login-form">
                <input type="hidden" id="title" name="title" value="${filteredId}">
                <textarea name="comment" placeholder="Please enter a reply.
                "></textarea>
                  <input type="submit">
              </form>
          </div>
      </body>
      
      </html>
      `;

  res.send(html);

  /*
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
*/
});

module.exports = router;
