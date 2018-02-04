var express = require('express');
var bodyParser = require('body-parser');
 
var app = express();
var port = process.env.PORT || 1337;
 
// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
 
app.use(function(req, res, next) {
  res.redirect('https://hdbgerrit.wdf.sap.corp:8443/#/c/' + req.path.slice(1));
});
 
app.listen(port, function () {
  console.log('Listening on port ' + port);
});
