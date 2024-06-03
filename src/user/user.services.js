const model = require('../database/model');
const sql =require('mssql');
module.exports ={

    getuserByLoginID : async (data, callback)=>{
        try{
            let query = `select * from UserMasterDetail where UserName=@LoginName`
            
            const request =model.db.request();
            request.input('LoginName',data.LoginName)
            console.log(data)
            const result =await request.query(query);
            // console.log(result.recordset[0]);
            return callback(null,result.recordset[0]);
        }
        catch(err){
            return callback(err)
        }
    },
    
}   