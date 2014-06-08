// Routes

var routes = module.exports = function(app) {
  // Root
  app.get('/', function(req, res) {
    res.end('Hello World');
  });
}