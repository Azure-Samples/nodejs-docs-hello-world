const router = require("express").Router();
const databaseForMobile = require("../config/database");




///get /recipes/all
router.get("/recipes/all", (req, res) => {
    databaseForMobile.query("SELECT * FROM inhouse.recipe;", (err, rows, fields) => {
        if (!err) {
            res.send(rows);

        } else {
            console.log(err);
        }
    });

});
//get /recipes/get/:id
router.get("/recipes/get/:id", (req, res) => {
    databaseForMobile.query(`SELECT * FROM inhouse.recipe where id="${req.params.id}"`, (err, rows, fields) => {
        if (!err) {
            if (rows[0]) {
                res.send(rows[0]);
            } else {
                res.status(400).send("No product found");
            }

        } else {
            console.log(err);
        }
    });

});
//delete /recipes/delete/:id
router.delete("/recipes/delete/:id", (req, res) => {
    databaseForMobile.query(`DELETE FROM inhouse.recipe where id="${req.params.id}"`, (err, rows, fields) => {
        if (!err) {
            if (rows[0]) {
                res.send(rows[0]);
            } else {
                res.status(400).send("No product found");
            }

        } else {
            console.log(err);
        }
    });

});
//create /recipes/create/
router.get("/recipes/create", (req, res) => {
    databaseForMobile.query(`DELETE FROM inhouse.recipe where id="${req.params.id}"`, (err, rows, fields) => {
        if (!err) {
            if (rows[0]) {
                res.send(rows[0]);
            } else {
                res.status(400).send("No product found");
            }

        } else {
            console.log(err);
        }
    });

});

module.exports = router;