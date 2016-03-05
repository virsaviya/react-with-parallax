var express = require('express');
var logger = require('morgan');
var path = require('path');

var PORT = process.env.PORT || 3000;

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'build')));

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
})
