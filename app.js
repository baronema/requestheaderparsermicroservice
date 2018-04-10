const   express = require('express'),
        favicon = require('express-favicon'),
        path    = require('path'),
        app     = express(),
        port    = process.env.PORT || 3000;
        
app.use(express.static(path.join(__dirname, '/public')));
app.use(favicon(__dirname + '/public/favicon.ico'));

app.get('/', function(req, res) {
    res('index.html');
})

app.get('/api/whoami', function(req, res) {
  var ip = req.headers['x-forwarded-for'];
  var language = req.headers['accept-language'].split(',')[0];
  var os = req.headers['user-agent'].split(/[\(\)]/)[1];

  res.json({
    IPaddress: ip,
    Language: language,
    OS: os
  });
});


app.listen(port, function() {
  console.log('Server is listening on port ' + port);
});
