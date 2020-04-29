const {createPool} = require("mysql");
const fs = require('fs');

const pool = createPool({
    host: process.env.SUPERMARKET_DB_HOST,
    user: process.env.SUPERMARKET_DB_USER,
    password: process.env.SUPERMARKET_DB_PASSWORD,
    ssl  : {
      ca : fs.readFileSync(__dirname + '/BaltimoreCyberTrustRoot.crt.pem')
    },
    multipleStatements: true,
    connectionLimit: 10,
})

module.exports = pool;