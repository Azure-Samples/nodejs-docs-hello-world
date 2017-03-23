var http = require('http');

var server = http.createServer(function(request, response) {

    console.log("Handling Request");

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);