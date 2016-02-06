var express = require('express');
var logger = require('morgan');
var path = require('path');

var PORT = process.env.PORT || 3000;

var app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'build')));

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
})