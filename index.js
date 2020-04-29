//Get .env file
const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const bodyParser = require('body-parser')
const AuthRouters = require("./routers/auth")
const InHouseRouters = require("./routers/inhouse")
const HouseRouters = require("./routers/house")
const SuperMarketRouters = require("./routers/supermarket")
let app = express()

app.use(bodyParser.json())

app.use("/", AuthRouters)
app.use("/", InHouseRouters)
app.use("/", SuperMarketRouters)
app.use("/", HouseRouters)

const port = process.env.PORT || 3002
app.listen(port, ()=> console.log("Express server running on port:"+port))

console.log("Server running at http://localhost:%d", port)
