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
  var ID = post.id;
  var ANSWER = post.answer;

  var query = `select * from userdata where id = '${ID}';`; // {id}을 토대로 userData에서 사용자 정보를 가져올것.

  connection.query(query, function (error, results, fields) { // results = {id}로 검색한 Userdata
    if (error) {
        console.log(error);
    } else {
        if(results[0].Q_Answer == ANSWER){
            res.send(`
            <script>window.location=\"../\"</script>
            <script>alert('${results[0].password}')</script>`
            );
        }
        else{
          res.send(`
          <script>window.location=\"../find\"</script>
          <script>alert('질문에 대한 답이 틀립니다. 다시 시도하여주세요.')</script>`
          );
        }
    }
  });
});

module.exports = router;

/*
NOTICE
아이디 입력 잘못했을 때 예외처리 안되어있음
*/
