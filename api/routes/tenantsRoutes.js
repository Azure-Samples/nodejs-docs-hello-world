const express = require('express');
const router = express.Router();
const Models = require("../models/db");

const jwt = require('jsonwebtoken');

router.get('/',(req,res,next)=>{
    res.status(200).json({
        msg: 'handling get for tenants'
    });
});


router.get('/:guid',(req,res,next)=>{
    const id = req.params.guid;
    const token = jwt.sign({
        name: "solomon",
        email: "solo@me.com"
    },process.env.JWT_KEY,
    {
        expiresIn: "1h"
    });

    const data = Models.Tenant.findAll().then(function(Tenants) {
          res.status(200).json({
            msg: 'handling get for single tenants at'+id,
            token: token,
            data: Tenants
        });
      });
});

router.post('/',(req,res,next)=>{
    res.status(200).json({
        msg: 'handling post for tenants'
    });
});

router.put('/',(req,res,next)=>{
    const data = {
        name: req.body.name||""
    };

    res.status(200).json({
        msg: 'handling put for tenants',
        data: data
    });
});

router.patch('/',(req,res,next)=>{
    res.status(200).json({
        msg: 'handling patch for tenants'
    });
});

module.exports = router;