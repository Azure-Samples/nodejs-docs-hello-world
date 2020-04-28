const express = require("express")
const Router = express.Router()
const bcrypt = require('bcrypt')
const inhouseDB = require("../config/inhouseDBConnection")
const jwt = require('jsonwebtoken')

Router.post('/register', async (req, res) => {
        if (!req.body.name){
                return res.status(400).send("Name missing")
        }

        if (!req.body.email){
                return res.status(400).send("Email missing")
        }

        if (!req.body.password){
                return res.status(400).send("Password missing")
        } 
        
        let name = req.body.name
        let email = req.body.email
        let password = req.body.password

        if (ValidateEmail(email)) {                
                let hashedPassword = await bcrypt.hash(password, 10)

                inhouseDB.query(`select * from inhouse.user where email = "${email}"`, (err, rows, fields) => {
                        if (!err) {
                                if (rows[0]) {
                                        return res.status(400).send("Email already exists")
                                } else {
                                        ///Create account
                                        inhouseDB.query(
                                                `INSERT INTO inhouse.user (name, email, password) VALUES ("${name}","${email}","${hashedPassword}")`, (err, rows, fields) => {
                                                        if (!err) {
                                                                console.log("/register....Succesfull")
                                                                return res.status(201).send("Account has been created")
                                                        } else {
                                                                console.log("/register....DB_INSERT-error: " + err)
                                                                return res.status(500).send("Internal Server Error")
                                                        }
                                                })
                                }
                        } else {
                                console.log("/register....DB_SELECT-error: " + err)
                                return res.status(500).send("Internal Server Error")
                        }
                })
        } else {
                console.log("/register....Email is not valid: " + email)
                return res.status(400).send("Email is not valid")
        }
})


Router.post('/login', async (req, res) => {
        if (!req.body.email){
                return res.status(400).send("Email missing")
        }

        if (!req.body.password){
                return res.status(400).send("Password missing")
        }

        let email = req.body.email
        let password = req.body.password

        inhouseDB.query(`select id,email,password from inhouse.user where email = "${email}"`, (err, rows, fields) => {
                if (!err) {
                        if (rows[0]) {
                                //Email exists
                                bcrypt.compare(password, rows[0].password, function (err, isMatch) {
                                        if (err) {
                                                console.log("/login....bcrypt-Error: " + err)
                                                return res.status(500).send("Internal Server Error")
                                        }

                                        if (isMatch) {
                                                //TODO Send JWT Token
                                                return res.status(200).send("OK")
                                        } else {
                                                return res.status(400).send("Password is not correct")
                                        }
                                })
                        } else {
                                //Email does not exist
                                return res.status(400).send("The email does not exist")
                        }

                } else {
                        console.log("/login....DB_SELECT-error: " + err)
                        return res.status(500).send("Internal Server Error")
                }
        })
        // let user = inhouseDB.query(`select email from inhouse.users where email = "${req.body.email}"`, (err, rows, fields) => {
        //         if (!err) {
        //                 /// Email exists
        //                 if (rows[0]) {
        //                         console.log(rows[0]);
        //                         inhouseDB.query(`select id,password from inhouse.users where email = "${req.body.email}"`, (err, r, fields) => {
        //                                 if (r[0]) {
        //                                         bcrypt.compare(req.body.password, r[0].password, function (err, isMatch) {
        //                                                 if (err) throw err;
        //                                                 if (isMatch) {
        //                                                         const token = jwt.sign({ id: r[0].id }, secret);
        //                                                         res.header('auth-token').send(token);
        //                                                 } else {
        //                                                         res.status(400).send("Password is not corrent");
        //                                                 }

        //                                         });

        //                                 }
        //                         });
        //                 }
        //         } else {
        //                 res.status(500).send("Ultra fail");
        //         }
        // });
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
})


function ValidateEmail(mail) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)
}

module.exports = Router