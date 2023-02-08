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
  password: "hong6376",
  database: "buskerbuskerData",
  insecureAuth: true,
});

connection.connect();
router.post("/", function (request, response) {
  var post = request.body;
  console.log('진입');
  var deleteNum = post.deleteAnswerNum;
  console.log(deleteNum);
  var query = `delete from commentdata where num = '${deleteNum}';`; // {deleteNum}을 토대로 commentData에서 게시글 정보 가져올것.

  connection.query(query, function (error, results, fields) {
    // results : noticeData 정보
    if (error) {
      console.log(error);
    } else {
      response.redirect('../');
    }
  });
});
module.exports = router;
