const {createPool} = require("mysql");
const fs = require('fs');

const pool = createPool({
    host: 'proep.mysql.database.azure.com',
    user: 'proep_backend@proep',
    password: 'o7M3b^7s*%SEVf',
    ssl  : {
      ca : fs.readFileSync(__dirname + '/BaltimoreCyberTrustRoot.crt.pem')
    },
    multipleStatements: true,
    connectionLimit: 10,
})

module.exports = pool;