var express = require('express');
var app = express();
var router_mainPage = require('./router/main_page');
var router_displayPage = require('./router/noticeDisplay');
var router_myPage = require('./router/myPage');

// var template = require('./lib/template.js');

app.use('/',router_mainPage);
app.use('/notice',router_displayPage);
app.use('/myPage',router_myPage);

app.listen(3000, () => {
  console.log('listen t0 3000')
});