const { response, request } = require("express");
var express = require("express");
//var router = express.Router();
var router = express.Router({ mergeParams: true });
var template = require('../lib/template.js');
var fs = require('fs');


router.use(function (req, res, next) {
  next();
});

router.get('/',function(request, response){
  fs.readdir('./data/noticeData', function(err, filelist){
    // console.log(filelist); [ 'Q1', 'Q2' ]
    
  });
});


// // if pageId = 질문1
// router.get("/", function (request, response) {
//   //filelist = [ 'mypage', 'notice' ]
//   fs.readdir("../data/noticeData", function (error, filelist) {
//     var filteredId = path.parse(request.params.pageId).base;
//     console.log(filteredId);
//     fs.readFile(`../data/noticeData/${filteredId}`, "utf8", function (err, description) {
//       var title = request.params.pageId;
//       var sanitizedTitle = sanitizeHtml(title);
//       var sanitizedDescription = sanitizeHtml(description, {
//         allowedTags: ["h1"],
//       });
//       var list = template.list(filelist);
//       var html = template.HTML(
//         sanitizedTitle,
//         list,
//         `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
//         ` <a href="/create">create</a>
//           <a href="/update/${sanitizedTitle}">update</a>
//           <form action="delete_process" method="post">
//             <input type="hidden" name="id" value="${sanitizedTitle}">
//             <input type="submit" value="delete">
//           </form>`
//       );
//       response.send(html);
//     });
//   });
// });

module.exports = router;
