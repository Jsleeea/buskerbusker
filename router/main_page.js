var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
  next();
});

router.get('/', function(req, res) {
  var title = 'Welcome';
  var description = 'Hello, Node.js';
  var html = 
    `
    <h2>${title}</h2>
    ${description}

    `
  res.send(html);
});

module.exports = router;