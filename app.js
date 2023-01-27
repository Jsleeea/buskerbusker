var express = require('express');
var app = express();
var router_1 = require('./router/router_1');

app.use('/',router_1);

app.listen(3000, () => {
  console.log('listen t0 3000')
});
