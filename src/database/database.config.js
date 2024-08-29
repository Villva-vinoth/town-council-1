
const mssql = require("mssql");
const dotenv =require('dotenv')
dotenv.config();

const config = {
    server: '97.74.83.13',
    // database: 'prod-shatechnosolutions',
    // user: 'shatechno-proddev', 
    // password: 'gXM5KMeAx',
    database: 'dev.shatechno',
    user: 'dev.shatechno', 
    password: '7!jYo787n7',
    options: {
        trustedConnection: true,
        enableArithAbort: false,
        encrypt: true, 
        trustServerCertificate: false,

    }
}

module.exports = config;
