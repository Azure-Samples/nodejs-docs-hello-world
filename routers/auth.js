const express = require("express");
const Router = express.Router();
const bcrypt = require('bcrypt');
const mySqlConnection = require("../config/database");
const jwt = require('jsonwebtoken');


let secret = "secret"




Router.post('/register', async (req, res) => {

        if (ValidateEmail(req.body.email)) {
                console.log("Registering....Email is valid");

                let hashedPassword = await bcrypt.hash(req.body.password, 10);

                console.log(req.body.password);
                console.log(hashedPassword);


                mySqlConnection.query(`select * from inhouse.users where email = "${req.body.email}" `, (err, rows, fields) => {
                        if (!err) {
                                if (rows[0]) {
                                        return res.status(400).send("Email already exists");
                                } else {
                                        ///Create account
                                        mySqlConnection.query(
                                                ` INSERT INTO inhouse.users (name, email, password, role, houseid) VALUES ("${req.body.name}","${req.body.email}","${hashedPassword}",${req.body.role},${req.body.houseid})`, (err, rows, fields) => {
                                                        if (!err) {
                                                                console.log("No error");
                                                        } else {
                                                                console.log(err);
                                                        }
                                                })

                                }
                                //res.send(rows);
                        } else {
                                console.log(err);
                        }
                });

                res.status(201).send("Account has been created");
        } else {
                console.log("Email is not valid");
                res.status(400).send("Email is not valid");
        }
})


Router.post('/login', async (req, res) => {

        let user = mySqlConnection.query(`select email from inhouse.users where email = "${req.body.email}"`, (err, rows, fields) => {
                if (!err) {
                        /// Email exists
                        if (rows[0]) {
                                console.log(rows[0]);
                                mySqlConnection.query(`select id,password from inhouse.users where email = "${req.body.email}"`, (err, r, fields) => {
                                        if (r[0]) {
                                                bcrypt.compare(req.body.password, r[0].password, function (err, isMatch) {
                                                        if (err) throw err;
                                                        if (isMatch) {
                                                                const token = jwt.sign({
                                                                        id: r[0].id
                                                                }, secret);
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
});


function ValidateEmail(mail) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
}

module.exports = Router;