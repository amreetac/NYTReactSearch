// Include Server Dependencies
var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/public'));
app.listen(3000, function() {
  console.log('App running on port 3000!');
});
// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect('mongodb://admin:codingrocks@ds023664.mlab.com:23664/reactlocate');
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});


