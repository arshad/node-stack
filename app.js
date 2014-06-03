'use strict';

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.end('Hola');
});

app.listen(3000, function() {
  console.log("Now listening at http://127.0.0.1:3000");
});
