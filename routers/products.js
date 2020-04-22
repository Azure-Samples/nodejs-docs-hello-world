const express = require("express");
const mySqlConnection = require("../connection");
const Router = express.Router();

Router.get("/products", (req,res) => {
   mySqlConnection.query("select * from supermarket.product limit 10;", (err,rows,fields)=> {
        if(!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
   });
   
});

module.exports = Router;