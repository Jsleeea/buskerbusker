var express = require("express");
var router = express.Router();
var mysql = require('mysql');

router.use(function (req, res, next) {
  next();
});

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'hong6376', // 본인 mySql Password 사용
    database : 'buskerbuskerData',
    insecureAuth: true
});

router.get('/', function (req, res) {
    var template = 
    `<!DOCTYPE html>
    <html>
        <body>
            <form action='/register' method='post'>
                ID : <input type='text' name='register_id'><br>
                PWD : <input type='password' name='register_pw'><br>
                Question : What is your middle school? <br>
                Answer : <input type='text' name='register_Q'><br>
                <input type='submit' value='register'>
            </form>
        </body>
    </html>`;
    res.writeHead(200, {'ContentType':'text/html'});
    res.write(template);
    res.end();
});

connection.connect();

router.post('/',function (req, res) {
   var body = req.body;
   var id = body.register_id;
   var pw = body.register_pw;
   var q = body.register_Q;

   var query = `
   INSERT INTO \`userData\` VALUES (NULL,'${id}','${pw}','${q}');
   `

   connection.query(query, function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    else{
        console.log('회원가입 성공');
    }
   });

   res.redirect('/');
});

module.exports = router;