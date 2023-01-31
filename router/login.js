var express = require("express");
var router = express.Router();
// var template = require('./lib.template.js');

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

router.post('/',function (req, res) {
   var body = req.body;
   var id = body.id;
   var pwd = body.pwd;

   res.send("ID : " + body.id + " / PWD : " + body.pwd);
});

module.exports = router;