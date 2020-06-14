const http = require('http');
var url = require('url');

const server = http.createServer((request, response) => {
    var queryData = url.parse(request.url, true).query;
    if (queryData.name) {
        // user told us their name in the GET request, ex: http://host:8000/?name=Tom
        response.end('Hello ' + queryData.name + '\n');
    }
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
