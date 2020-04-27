// const http = require('http');

// const server = http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello World!");
// });

// const port = process.env.PORT || 1337;
// server.listen(port);

    // console.log("Server running at http://localhost:%d", port);



const express = require('express');
const bodyParser = require('body-parser');
const AuthRouters = require("./routers/eveything");
const MobileAppRouters = require("./routers/eveything");
let app = express();

app.use(bodyParser.json());

app.use("/",AuthRouters);
app.use("/",MobileAppRouters);

const port = process.env.PORT || 3002;
app.listen(port, ()=> console.log("Express server running on port:"+port));

console.log("Server running at http://localhost:%d", port);