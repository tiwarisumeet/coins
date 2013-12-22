 var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);
var request = require('request');
var json;
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.get('/mtgox', function (req, res) {
  res.sendfile(__dirname + '/testmtgox.html');
});

io.sockets.on('connection', function (socket) {
 request('https://www.bitstamp.net/api/ticker/', function (error, response, body) {
     console.log(body); 
 socket.emit('news', body);
});
  
});



server.listen(process.env.PORT || 3000, process.env.IP );