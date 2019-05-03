var http = require('http');
const express = require('express')
const app = express()


var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
        const version = process.version;
        var pid = process.pid;
        const argv = require('yargs').argv

        var output = "nodejs version = "+ process.version + ", Process Id = " + pid + ", mongourl = "+ argv.mongourl;
        response.write(output);
        response.end("------------");
});

var port = process.env.PORT || 8081;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
