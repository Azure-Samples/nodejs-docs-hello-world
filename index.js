var http = require('http');
const express = require('express')
const app = express()


var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
        response.end("Hello World",process.versions);

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
console.log(process.versions);
