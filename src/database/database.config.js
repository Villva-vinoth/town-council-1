
const mssql = require("mssql");
const dotenv =require('dotenv')
dotenv.config();

const config = {
    server: '97.74.83.13',
    database: 'prod-shatechnosolutions',
    user: 'shatechno-proddev', 
    password: 'gXM5KMeAx',
    options: {
        trustedConnection: false,
        enableArithAbort: true,
        encrypt: false, 
        trustServerCertificate: true,

    }
}


// mssql.connect(config, function(err) {
//     if(err) {
//         console.log("err", err)
//     }
//     else{
//         console.log("connected")
//     }
// })

module.exports = config;