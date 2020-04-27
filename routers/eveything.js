const router = require("express").Router();
const verify = require("./verifyToken");
const databaseForMobile = require("../config/inhouseDBConnection");
const databaseForWebShop = require("../config/supermarketDBConnection");

router.get('/test',verify,(req,res)=> {
    res.status(200).send("works");
})


router.get("/products", (req,res) => {
    databaseForWebShop.query("select * from supermarket.product limit 10;", (err,rows,fields)=> {
        if(!err) {
            res.send(rows);

        } else {
            console.log(err);
        }
   });

});

router.get("/categories", (req,res) => {
    databaseForWebShop.query("select * from supermarket.category;", (err,rows,fields)=> {
         if(!err) {
             res.send(rows);
         } else {
             console.log(err);
         }
    });

 });

module.exports = router;