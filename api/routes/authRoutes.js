const express = require('express');
// const bcrypt = require('bcrypt');
const validate = require('validator');
const router = express.Router();
const Models = require("../models/db");

const jwt = require('jsonwebtoken');

router.post('/login',(req,res,next)=>{
    // const data = tenantController.all(req,res,next);
    // const id = req.params.guid;
    // const token = jwt.sign({
    //     name: "solomon",
    //     email: "solo@me.com"
    // },process.env.JWT_KEY,
    // {
    //     expiresIn: "1h"
    // });

    // const data = Models.Tenant.findAll().then(function(Tenants) {
    //       res.status(200).json({
    //         msg: 'handling get for single tenants at'+id,
    //         token: token,
    //         data: Tenants
    //     });
    //   });
});


router.post('/register',(req,res,next)=>{
    const name = req.params.name;
    const email = req.params.email;
    const password = req.params.password;
    const password_confirmation = req.params.password_confirmation;

    if (!name)
    {
        res.status(403).json('The name cannot be empty');
        return true;
    }

    // bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    //     // Store hash in your password DB.
    // });

    // const token = jwt.sign({
    //     name: "solomon",
    //     email: "solo@me.com"
    // },process.env.JWT_KEY,
    // {
    //     expiresIn: "1h"
    // });

    // const data = Models.Tenant.findAll().then(function(Tenants) {
    //       res.status(200).json({
    //         msg: 'handling get for single tenants at'+id,
    //         token: token,
    //         data: Tenants
    //     });
    //   });
});

module.exports = router;