const express = require("express");
const Router = express.Router();
const bcrypt = require('bcrypt');
const inhouseDB = require("../config/inhouseDBConnection");
const jwt = require('jsonwebtoken');


let secret = "secret"

Router.post('/register', async (req, res) => {
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password
        if (ValidateEmail(email)) {
                
                let hashedPassword = await bcrypt.hash(password, 10);

                console.log("/register....Email is valid");
                console.log("/register....Password: " + password);
                console.log("/register....HashedPassword: " + hashedPassword);

                inhouseDB.query(`select * from inhouse.user where email = "${email}"`, (err, rows, fields) => {
                        if (!err) {
                                if (rows[0]) {
                                        return res.status(400).send("The email already exists");
                                } else {
                                        ///Create account
                                        inhouseDB.query(
                                                `INSERT INTO inhouse.user (name, email, password) VALUES ("${name}","${email}","${hashedPassword}")`, (err, rows, fields) => {
                                                        if (!err) {
                                                                console.log("/register....Succesfull");
                                                                return res.status(201).send("Account has been created");
                                                        } else {
                                                                console.log("/register....DB_INSERT-error: " + err);
                                                                return res.status(500).send("Internal Server Error")
                                                        }
                                                })
                                }
                        } else {
                                console.log("/register....DB_SELECT-error: " + err);
                                return res.status(500).send("Internal Server Error")
                        }
                });
        } else {
                console.log("/register....Email is not valid");
                return res.status(400).send("The email is not valid");
        }
})


Router.post('/login', async (req, res) => {

        let user = inhouseDB.query(`select email from inhouse.users where email = "${req.body.email}"`, (err, rows, fields) => {
                if (!err) {
                        /// Email exists
                        if (rows[0]) {
                                console.log(rows[0]);
                                inhouseDB.query(`select id,password from inhouse.users where email = "${req.body.email}"`, (err, r, fields) => {
                                        if (r[0]) {
                                                bcrypt.compare(req.body.password, r[0].password, function (err, isMatch) {
                                                        if (err) throw err;
                                                        if (isMatch) {
                                                                const token = jwt.sign({ id: r[0].id }, secret);
                                                                res.header('auth-token').send(token);
                                                        } else {
                                                                res.status(400).send("Password is not corrent");
                                                        }

                                                });

                                        }
                                });
                        }
                } else {
                        res.status(500).send("Ultra fail");
                }
        });

        //res.status(200).send("ITs ok");
        //return res.status.send("test");
        // if (user == null) {
        //         return res.status.send("Cannot find user");
        // }
        // try {
        //         if (await bcrypt.compare(req.body.password, user.password)) {
        //                 res.status(200).send('Succes');
        //         } else {
        //                 res.status(200).send('Not allowed');
        //         }
        // } catch {
        //         res.status(500).send();
        // }


});


function ValidateEmail(mail) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
}

module.exports = Router;


// Router.get("/products", (req,res) => {
//    inhouseDB.query("select * from supermarket.product limit 10;", (err,rows,fields)=> {
//         if(!err) {
//             res.send(rows);

//         } else {
//             console.log(err);
//         }
//    });

// });

// Router.get("/categories", (req,res) => {
//     inhouseDB.query("select * from supermarket.category;", (err,rows,fields)=> {
//          if(!err) {
//              res.send(rows);
//          } else {
//              console.log(err);
//          }
//     });

//  });