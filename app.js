const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(express.static('image'));
const IP = "http://35.224.246.85";
app.use(cookieParser());
app.listen(80, () => console.log('server is running'));

function stampNum(idx) {
  if (value == undefined) value = [0,0,0,0,0,0,0];
  if (value[idx] == 1) return idx;
  else return 8;
}

function makeHTML() {
  var html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <title>사담과 함께 만들어갈, "사교인의 이야기"</title>
    <style>
    body {
      background-color: white;
    }
    #mainBoard {
      width: 100%;
      height: 100vh;
      margin: 0 auto;
      background: url('mainBoard.jpg') no-repeat 0 0;
      background-color: black;
      background-size: 100%;
    }
    table {
      position: absolute;
      top: 32%;
      left: 10%;
      width: 80%;
      height: 43%;
    }

    </style>
  </head>
  <body>
    <div id="mainBoard">
      <table>
        <tr>
          <td>
            <div style="
            background: url('boardNo${stampNum(0)}.png');
            background-size: 100%;
            width: 100%;
            height: 100%;
            ">
            </div>
          </td>
          <td>
            <div style="
            background: url('boardNo${stampNum(1)}.png');
            background-size: 100%;
            width: 100%;
            height: 100%;
            ">
            </div>
          </td>
          <td>
            <div style="
            background: url('boardNo${stampNum(2)}.png');
            background-size: 100%;
            width: 100%;
            height: 100%;
            ">
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div style="
            background: url('boardNo${stampNum(3)}.png');
            background-size: 100%;
            width: 100%;
            height: 100%;
            ">
            </div>
          </td>
          <td>
          </td>
          <td>
            <div style="
            background: url('boardNo${stampNum(4)}.png');
            background-size: 100%;
            width: 100%;
            height: 100%;
            ">
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div style="
            background: url('boardNo${stampNum(5)}.png');
            background-size: 100%;
            width: 100%;
            height: 100%;
            ">
            </div>
          </td>
          <td>
            <div style="
            background: url('boardNo${stampNum(6)}.png');
            background-size: 100%;
            width: 100%;
            height: 100%;
            ">
            </div>
          </td>
          <td>
            <div style="
            background: url('boardNo${stampNum(7)}.png');
            background-size: 100%;
            width: 100%;
            height: 100%;
            ">
            </div>
          </td>
        </tr>
      </table>
    </div>
  </body>
  </html>
  `
  return html;
}

app.get('/init', function(req,res) {
  console.
  value = req.cookies.value;
  res.cookie('name', undefined);
  res.cookie('value', [0,0,0,0,0,0,0]);
  value = [0,0,0,0,0,0,0];
  var template = makeHTML();
  res.send(template);
});

app.get('/main', function(req,res) {
  value = req.cookies.value;
  var template = makeHTML();
  res.send(template);
});

var conv = ['0','1','2','3','4','5','6','7'];

app.get('/:id', function(req,res) {
  var id = req.params.id;
  if (!conv.includes(id)) {
    res.send('incorrect url');
  } else {
    var num = conv.indexOf(id);
    value = req.cookies.value;
    value[num] = 1;
    res.cookie('value', value);
    var template = makeHTML();
    res.send(template);
  }
});
