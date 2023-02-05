var express = require("express");
var app = express();
var router = express.Router();
var mysql = require("mysql");

router.use(function (req, res, next) {
  next();
});

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "junsung",
  database: "buskerbuskerData",
  insecureAuth: true,
});

connection.connect();
router.post("/", function (request, response) {
  var post = request.body;
  var title = post.title;
  var query = `delete from commentdata where noticetitle = '${title}';`; // {title}을 토대로 commentData에서 게시글 정보 가져올것.
  var query_2 = `delete from noticedata where title = '${title}';`; // {title}을 토대로 noticeData에서 답변 정보 가져올것.

  connection.query(query, function (error, results, fields) {
    // results : noticeData 정보
    if (error) {
      console.log(error);
    } else {
      console.log(title, " 내에 답변 삭제 완료");
      connection.query(query_2, function (error_2, results_2, fields_2) {
        // results_2 : commentData 정보
        if (error_2) {
          console.log(error_2);
        } else {
          console.log(title, " 삭제 완료");
          response.redirect("../");
        }
      });
    }
  });
});
module.exports = router;
