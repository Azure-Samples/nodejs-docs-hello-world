var http = require('http');
const express = require('express')
const app = express()
var fs = require('fs');
const Nightmare = require('nightmare');
var path = require('path');
const nightmare = Nightmare({
    show: false,
    gotoTimeout: 120000,
    waitTimeout: 120000,
  });
const pathToPdfFile = path.resolve('test.pdf');


var server = http.createServer(function(request, response) {
  

        var pid = process.pid;
        //const argv = require('yargs').argv


        //response.end("---dev2---------");
        nightmare
           .goto(`http://www.google.com`)
          //.wait('.nightmare-loaded-indicator')
          .pdf(pathToPdfFile)
          .end()
          .then(() => {
          console.log(pathToPdfFile);
        })
        .catch((error) => {
           console.error('Render failed: ', error)
        });
        var output = "nodejs version = "+ process.version + ", Process Id == " + pid;
        response.write(output);
});

var port = process.env.PORT || 8081;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
