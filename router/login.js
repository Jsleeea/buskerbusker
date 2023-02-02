var express = require("express");
var router = express.Router();
var mysql = require('mysql');
var cookieParser = require('cookie-parser');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'hong6376', // 본인 mySql Password 사용
    database : 'buskerbuskerData',
    insecureAuth: true
});

// router.use(cookieParser);

router.use(function (req, res, next) {
  next();
});

router.get('/', function (req, res) {
    var template = 
    `<!DOCTYPE html>
    <html>
        <body>
            <form action='/login' method='post'>
                ID : <input type='text' name='id'><br>
                PWD : <input type='password' name='pwd'><br>
                <input type='submit' value='login'>
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
   var id = body.id;
   var pwd = body.pwd;

   var query = `select password from userdata where id= "${id}";`

   connection.query(query, function (error, results, fields) {
    if (error) {
        console.log(error);
    }

    else{
        if(results.length == 0){ // 아이디가 존재 안함
            console.log("아이디 틀림");
            res.redirect('/login');
        }

        else{
            if(pwd == results[0].password){ // password
                console.log("로그인 성공");
                console.log('로그인 id :', id); // 확인용
                res.cookie("User",id,{
                    maxAge: 60*60*1000,
                    httpOnly: true,
                    path:'/'
                });
                res.redirect("../");
            }
            else{
                console.log("비밀번호 틀림");
                res.redirect('/login');
            }
        }
    }
   });
});

module.exports = router;