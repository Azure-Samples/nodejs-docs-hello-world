var http = require('http');
const express = require('express')
const app = express()
var fs = require('fs');
const Nightmare = require('nightmare');
const path = require('path');
const nightmare = Nightmare({
    show: false,
    gotoTimeout: 120000,
    waitTimeout: 120000,
  });
const pathToPdfFile = path.resolve('test.pdf');


var server = http.createServer(function(request, response) {
  

        var pid = process.pid;
        //const argv = require('yargs').argv

        //var output = "nodejs version = "+ process.version + ", Process Id = " + pid + ", mongourl = "+ argv.mongourl;
        var output = "nodejs version = "+ process.version + ", Process Id = " + pid;
        response.write(output);
        //response.end("---dev2---------");
        nightmare
           .goto(`https://www.yahoo.com`)
          //.wait('.nightmare-loaded-indicator')
          .pdf(pathToPdfFile)
          .end()
          .then(() => {
          console.log(pathToPdfFile);
        })
        .catch((error) => {
           console.error('Render failed: ', error)
        });
});

var port = process.env.PORT || 8081;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
