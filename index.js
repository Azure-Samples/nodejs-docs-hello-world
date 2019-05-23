const express = require('express')

const app = express()
 

var port = process.env.port || 8081;
 

app.get('/', function (req, res) {

 res.setHeader('Transfer-Encoding', 'chunked');

 res.useChunkedEncodingByDefault = true;

 res.send(process.version)

 });

app.listen(port, () => console.log('Example app listening on port 8081!'))
