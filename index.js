// const http = require('http');
//
// const server = http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello World!");
// });
//
// const port = process.env.PORT || 1337;
// server.listen(port);
//
// console.log("Server running at http://localhost:%d", port);

const http = require('http');
const app = require('./app');

const Models = require("./api/models/db");
const port = process.env.PORT || 3000;


const init = async () =>{
    //await Models.sequelize.sync();

    const server = http.createServer(app);
    await server.listen(port);

    console.log(server.address());
}


init()
