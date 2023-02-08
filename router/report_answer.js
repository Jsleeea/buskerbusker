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

router.post("/", function (req, res){
  var post = req.body;
  var reportedAnswer = post.reportedAnswer;

  var query = `UPDATE commentData SET reported = TRUE where num = '${reportedAnswer}';`; // {reported_title}을 토대로 noticeData에서 사용자 정보를 가져올것.

  connection.query(query, function (error, results, fields) { // results = {id}로 검색한 Userdata
    if (error) {
        console.log(error);
    } else {
        console.log('신고완료');
        res.send(`
          <script>window.location=\"../\"</script>
          <script>alert('정상적으로 신고처리 되었습니다.')</script>`
        );
    }
  });
});

module.exports = router;

/*
NOTICE
*/