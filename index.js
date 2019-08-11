var WebSocketServer = require('websocket').server;
var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  fs.createReadStream(path.resolve(__dirname, 'index.html')).pipe(res);
});

server.listen(1337, function() { });

// create the server
wsServer = new WebSocketServer({
  httpServer: server
});

const connections = [];

function send(message){
  connections.forEach(function(connection){
    if(connection.connected){
      connection.sendUTF(message);
    }
  })
}


// WebSocket server
wsServer.on('request', function(request) {
  var connection = request.accept(null, request.origin);
  connection.on('message', function(message) {
    if (message.utf8Data) {
      console.log(message.utf8Data);
      send(message.utf8Data);
    }
  });
  connections.push(connection);
});