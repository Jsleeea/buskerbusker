var mysql      = require('mysql');

// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다. 
/* 
ER_NOT_SUPPORTED_AUTH_MODE 해결법:
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'hong6376';
*/

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'hong6376',
  database : 'buskerbuskerData',
  insecureAuth: true
});
  
connection.connect();
  
connection.query('SELECT * FROM userData', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results[0].id);
    // console.log(fields);
});
  
connection.end();