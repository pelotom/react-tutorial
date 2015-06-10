var data = [
  {"author": "Pete Hunt", "text": "This is one comment"},
  {"author": "Jordan Walke", "text": "This is *another* comment"}
];

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var commentsURL = '/comments.json';

function sendData(res) {
  res.send(JSON.stringify(data, null, 4));
}

app.get(commentsURL, function (req, res) {
  sendData(res);
});

app.post(commentsURL, function (req, res) {
  data.push(req.body);
  sendData(res);
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
