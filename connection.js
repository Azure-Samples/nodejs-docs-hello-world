//Connect to database
const fs = require('fs');
const mysql = require('mysql');

// First you need to create a connection to the database
// Be sure to replace 'user' and 'password' with the correct values
const con = mysql.createConnection({
    host: 'proep.mysql.database.azure.com',
    user: 'proep_webshop@proep',
    password: '$y4a2Xmt*tTMc7',
    ssl  : {
      ca : fs.readFileSync(__dirname + '/BaltimoreCyberTrustRoot.crt.pem')
    },
    multipleStatements: true
  });
  
  con.connect((err) => {
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  });
  
  // con.end((err) => {
  //   // The connection is terminated gracefully
  //   // Ensures all remaining queries are executed
  //   // Then sends a quit packet to the MySQL server.
  // });

module.exports = con;