//Get .env file
const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const bodyParser = require('body-parser')
const AuthRouters = require("./routers/auth")
const InHouseRouters = require("./routers/inhouse")
const HouseAppRouters = require("./routers/house")
const RecipeAppRouters = require("./routers/recipe")
const SuperMarketRouters = require("./routers/supermarket")
let app = express()

app.use(bodyParser.json())

app.use("/", AuthRouters)
app.use("/", SuperMarketRouters)
app.use("/", InHouseRouters)
app.use("/", RecipeAppRouters)
app.use("/", HouseAppRouters)

const port = process.env.PORT || 1337
app.listen(port, () => console.log("Express server running on port:" + port))

console.log("Server running at http://localhost:%d", port)