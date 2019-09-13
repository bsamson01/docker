var express = require('express');
var app = express();
var port = 3000;
app.get('/', function (req, res) {
  res.send('Hello User, If you think about it, this guy deserves 125%!');
});
app.listen(port, function () {
  console.log('Server running on port ' + port + '!');
});