/*

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
  // password: "junsung", // 본인 mySql Password 사용
  password: "hong6376",
  database: "buskerbuskerData",
  insecureAuth: true,
});

connection.connect();
router.post("/", function (request, response) {
  var post = request.body;
  var id = post.id; // ㄱㄱㄱ, HARD
  console.log(post.id);

  connection.query(
    "DELETE FROM noticedata WHERE id = ?",
    [post.id],
    function (error, result) {
      if (error) {
        throw error;
      } else {
        console.log("글 삭제 완료.");
        response.redirect("./");
      }
    }
  );

module.exports = router;

*/

