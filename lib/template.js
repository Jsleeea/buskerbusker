module.exports = {
  HTML: function (title, list, body, control, login) {
    return `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
        <style>
        * {
            padding: 0;
            margin: 0;
            border: none;
        }
        body {
                height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                font-size: 14px;
                font-family: 'Roboto', sans-serif;
            }
            #main {
              text-decoration: none;
              font-weight: bold;
              font-size: 50px;
              color: #FF7B54;
          }
          .question_list{
            border-top: 1px solid #FF7B54;
            margin: 30px auto;
            width: 300px;
            font-weight: bold;
            margin: 14px 0px 0px;
            padding: 4px 4px 16px 18px;
          }
          .questions{
            text-decoration: none;
            color: black;
          }
          
    </style>
      </head>
      <body>
        <h1><a id = 'main' href="/">BUSKERBUSKER</a></h1>
        ${login}
        <div>${list}<div/>
        ${control}
        ${body}
      </body>
      </html>
      `;
  },
  notice_HTML: function (title, list, body, control, login) {
    return `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
        <style>
        * {
            padding: 0;
            margin: 0;
            border: none;
        }
        body {
                height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                font-size: 14px;
                font-family: 'Roboto', sans-serif;
            }
            #main {
              text-decoration: none;
              font-weight: bold;
              font-size: 50px;
              color: #FF7B54;
          }
         
    </style>
      </head>
      <body>
        <h1><a id = 'main' href="/">BUSKERBUSKER</a></h1>
        ${login}
        <div>${list}<div/>
        ${control}
        ${body}
      </body>
      </html>
      `;
  },
  list: function (filelist) {
    var list = "<ul>";
    var i = 0;
    while (i < filelist.length) {
      list =
        list +
        `<li class='question_list'><a class='questions' href="/page/${filelist[i].title}">${filelist[i].title}</a></li>
        `;
      i = i + 1;
    }
    list = list + "</ul>";
    return list;
  },
  answer_list: function (filelist) {
    var list = "<ul>";
    var i = 0;
    while (i < filelist.length) {
      list =
        list +
        `<li>${filelist[i].author} : ${filelist[i].text} : ${filelist[i].created} </a></li>`;
      i = i + 1;
    }
    list = list + "</ul>";
    return list;
  },
};
