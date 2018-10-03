const http = require('http')

const server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"})
    response.end("Hello World!")

});

const port = process.env.PORT || 1337
server.listen(port)

console.log(`Server running at http://localhost:${port}`)
