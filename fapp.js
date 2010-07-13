var http = require('http'),
    Faye = require('./faye-node');

var fayeServer = new Faye.NodeAdapter({
  mount:    '/faye',
  timeout:  45
});

var httpServer = http.createServer(function(request, response) {
  if (fayeServer.call(request, response)) return;
  // Handle non-Faye requests
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write("The way is neither to the left or to the right.\n");
  response.end();
});

httpServer.listen(9090);

