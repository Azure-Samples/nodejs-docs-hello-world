const router = require("express").Router()
const databaseForInHouse = require("../config/inhouseDBConnection")
const verifyToken = require("./verifyToken")

router.post('/createhouse', verifyToken, (req,res) => {
    if (!req.body.house_name){
        return res.status(400).send("House_name missing")
    }
    if (!req.body.house_address){
        return res.status(400).send("House_address missing")
    }

    let user_id = req.user.id
    let house_name = req.body.house_name
    let house_address = req.body.house_address

    databaseForInHouse.getConnection((errConnection, connection) => {
        if(!errConnection){
            //Use only the connection for queries
            connection.query(`select * from inhouse.users where user_id = ${user_id} and house_id is null`, (errSelect, rows, fields) => {
                if(!errSelect){
                    if(rows[0]){

                        //Create house-transaction, all or nothing
                        connection.beginTransaction((errTransAction) => {
                            if(!errTransAction){

                                //Insert House, why house_invitation null => we have a insert-trigger on DB to generate uniquecode when null
                                connection.query(`insert into inhouse.house (house_name, house_address, house_invitation, admin_id) values ("${house_name}", "${house_address}", null, ${user_id})`, (errInsert, r, f) => {
                                    if(errInsert){
                                        console.log("/createhouse....DB_Insert-Error: " + errInsert)
                                        connection.rollback()
                                        connection.release()
                                        return res.status(500).send("Internal Server Error")
                                    } else {

                                        //Update user_role and house_id
                                        connection.query(`update inhouse.users as U inner join (select house_id, admin_id from inhouse.house where admin_id = ${user_id}) as H on U.user_id = H.admin_id set U.house_id  = H.house_id, U.user_role = 1;`, (errUpdate, results, f) => {
                                            if(errUpdate){
                                                console.log("/createhouse....DB_UPDATE-Error: " + errUpdate)
                                                connection.rollback()
                                                connection.release()
                                                return res.status(500).send("Internal Server Error")
                                            } else {
                                                connection.commit((errCommit) => {
                                                    if(errCommit){
                                                        console.log("/createhouse....DB_COMMIT-Error: " + errUpdate)
                                                        connection.rollback()
                                                        connection.release()
                                                        return res.status(500).send("Internal Server Error")
                                                    } else {
                                                        console.log("/createhouse....SUCCESS")
                                                        connection.release()
                                                        return res.status(201).send("House has been created")
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            } else {
                                console.log("/createhouse....DB_TransactionError: " + errTransAction)
                                connection.release()
                                return res.status(500).send("Internal Server Error")
                            }
                        })
        
                    } else {
                        //Already in a house
                        connection.release()
                        return res.status(403).send("User already in a house")
                    }
                } else {
                    console.log("/createhouse....DB_SELECT-error: " + errSelect)
                    connection.release()
                    return res.status(500).send("Internal Server Error")
                }
            })            

        } else {
            console.log("/createhouse....DB_getConnection-Error: " + errConnection)
            connection.release()
            return res.status(500).send("Internal Server Error")
        }
    })
})

module.exports = router