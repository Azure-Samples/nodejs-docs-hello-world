const router = require("express").Router()
const databaseForInHouse = require("../config/inhouseDBConnection")
const verifyToken = require("./verifyToken")

router.get('/testVerify', verifyToken, (req,res) => {
    res.json(req.user)
})

router.get('/testNoVerify', (req, res) => {
    res.status(200).send("Ok")
})

module.exports = router