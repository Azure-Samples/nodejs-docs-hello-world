var http = require('http');

var server = http.createServer(function(request, response) {

var urlreq = request.url
var urlmsg = urlreq.replace(/\//,"")

	if(!!urlmsg){
        var basemsg = "Hello ";
   		var message = basemsg.concat(urlmsg);
  	} else {
		var message = "Hello World in node.js";
  	}

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(message);

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
