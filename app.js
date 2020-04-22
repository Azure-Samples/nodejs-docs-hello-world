
const express = require('express');
const bodyParser = require('body-parser');
const mySqlConnection = require('./connection');
const ProductsRouters = require("./routers/products");
let app = express();

app.use(bodyParser.json());

app.use("/products",ProductsRouters);

app.listen(4001);





