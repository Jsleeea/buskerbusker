var express = require('express');
var app = express();
var router_mainPage = require('./router/main_page');

app.use('/',router_mainPage);

app.listen(3000, () => {
  console.log('listen t0 3000')
});