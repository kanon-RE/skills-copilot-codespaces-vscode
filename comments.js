// Create web server and listen on port 3000
// Respond to GET requests with a list of comments

// Load the http module to create an http server.
var http = require('http');
var url = require('url');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;
  var path = url_parts.pathname;

  if (path == "/comments") {
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(comments));
  } else {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.end("Not found");
  }
});

// Listen on port 3000, IP defaults to
