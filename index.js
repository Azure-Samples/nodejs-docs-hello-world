var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
var assert = require('assert');

function add (a, b) {
  return a + b;
}

var expected = add(1,2);
assert( expected === 3, 'one plus two is three');
