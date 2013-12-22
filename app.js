var express = require('express');
var app = express();
  var body ;

app.get('/', function(req, res){
  
  var options = {
  host: 'www.bitstamp.net',
  path: '/api/ticker/'
};
var https = require('https');
var req1 = https.get(options, function(res) {
//   console.log('STATUS: ' + res.statusCode);
//   console.log('HEADERS: ' + JSON.stringify(res.headers));
  // Buffer the body entirely for processing as a whole.
  var bodyChunks = [];
  res.on('data', function(chunk) {
    // You can process streamed parts here...
    bodyChunks.push(chunk);
  }).on('end', function() {
     body = Buffer.concat(bodyChunks);
    console.log('BODY: ' + body);
    // ...and/or process the entire body here.
  })
});
res.send(JSON.stringify(body));

req.on('error', function(e) {
  console.log('ERROR: ' + e.message);
});
});

app.listen(process.env.PORT || 3000, process.env.IP );