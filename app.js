'use strict';

var config = require('./app/config/config');
var express = require('express');
var app = express();

// Add routes.
var routes = require('./app/routes')(app);

app.listen(config.port, function() {
  console.log(config.name + " now listening at http://127.0.0.1:" + config.port + ".");
});
