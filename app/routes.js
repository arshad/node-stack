// Routes

var routes = module.exports = function(app) {
  // Root
  app.get('/', function(req, res) {
    res.render('home/index');
  });
}