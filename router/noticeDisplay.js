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
  password: "junsung", // 본인 mySql Password 사용
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
  //console.log(filteredId); HARD, ㄱㄱㄱ
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
              var id = results[0].num;
              console.log(id);
              var title = results[0].title;
              var description = results[0].text;
              var list = template.list(results_2);
              var answer_list = template.answer_list(results_3);
              var html = template.HTML(
                title,
                list,
                /*
                 */
                `
               <form action="/delete_process" method="post">
                 <input type="hidden" name="id" value="${id}">
                 <input type="submit" value="delete">
               </form><br><br>

                <div>답변:</div>
                ${answer_list}
                <a href='/answer/${filteredId}'>답변하기</a>
                `,
                `<h2>${title}</h2>${description}<br><br>`
              );
              res.send(html);
            }
          });
        }
      });
    }
  });

  /*
  fs.readdir("./data/noticeData", function (err, filelist) {
    var filteredId = path.parse(request.params.pageID).base;
    fs.readdir( `./data/${filteredId}/answerData`,function (err, answer_filelist) { //여기서 오류
        fs.readFile(
          `./data/noticeData/${filteredId}`,
          "utf-8",
          function (err, description) {
            var title = request.params.pageID;
            var list = template.list(filelist);
            var answer_list = template.answer_list(answer_filelist);
            var html = template.HTML(
              title,
              list,
              `
            <div>답변:</div>
            ${answer_list}
            <a href='/answer/${filteredId}'>답변하기</a>`,
              `<h2>${title}</h2>${description}<br><br>`
            );
            response.send(html);
          }
        );
      }
    );
  });
  */
});

module.exports = router;
