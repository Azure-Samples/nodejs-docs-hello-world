const {createPool} = require("mysql");
const fs = require('fs');

const pool = createPool({
    host: 'proep.mysql.database.azure.com',
    user: 'proep_webshop@proep',
    password: '$y4a2Xmt*tTMc7',
    ssl  : {
      ca : fs.readFileSync(__dirname + '/BaltimoreCyberTrustRoot.crt.pem')
    },
    multipleStatements: true,
    connectionLimit: 10,
})

module.exports = pool;