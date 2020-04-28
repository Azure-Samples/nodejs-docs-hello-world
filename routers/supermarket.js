const router = require("express").Router()
const databaseForWebShop = require("../config/supermarketDBConnection")

router.get("/products", (req,res) => {
    databaseForWebShop.query("select * from supermarket.product limit 10;", (err,rows,fields)=> {
        if(!err) {
            res.send(rows)

        } else {
            console.log("/products....Error: " + err)
            res.status(500).send("Internal Server Error")
        }
   })
})

router.get("/categories", (req,res) => {
    databaseForWebShop.query("select * from supermarket.category;", (err,rows,fields)=> {
         if(!err) {
             res.send(rows)
         } else {
            console.log("/categories....Error: " + err)
            res.status(500).send("Internal Server Error")
         }
    })
 })

module.exports = router