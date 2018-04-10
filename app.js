const   express = require('express'),
        path    = require('path'),
        app     = express(),
        port    = process.env.PORT || 3000;
        
app.use(express.static(path.join(__dirname, 'public')));

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


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started!!!");
});
