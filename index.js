var http = require('http');
const express = require('express')
const app = express()


var server = http.createServer(function(request, response) {
    
    response.setHeader('Transfer-Encoding', 'chunked');
    response.useChunkedEncodingByDefault = true;
    response.writeHead(200, {"Content-Type": "text/plain"});
    

        var pid = process.pid;
        //const argv = require('yargs').argv

        //var output = "nodejs version = "+ process.version + ", Process Id = " + pid + ", mongourl = "+ argv.mongourl;
        var output = "nodejs version = "+ process.version + ", Process Id = " + pid;
        response.write(output);
        response.end("---dev2---------");
});

var port = process.env.PORT || 8081;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
