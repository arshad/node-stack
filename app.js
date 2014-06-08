'use strict';

var config = require('./app/config/config');
var swig = require('swig');
var express = require('express');
var app = express();

// Use swig as the template engine.
app.engine('swig.html', swig.renderFile);
app.set('view engine', 'swig.html');
app.set('views', __dirname + '/app/views');

// Add routes.
var routes = require('./app/routes')(app);

app.listen(config.port, function() {
  console.log(config.name + " now listening at http://127.0.0.1:" + config.port + ".");
});
