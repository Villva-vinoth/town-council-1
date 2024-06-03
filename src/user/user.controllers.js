const { generateToken } = require('../utils/jwt');
const {  getuserByLoginID } = require('./user.services');

module.exports = {

    login: (req, res) => {
        const body = req.body;

        getuserByLoginID(body, (err, result) => {
            if (err) {
                // console.log("err",err)
                return res.status(500).json({
                    success: 0,
                    message: "Internal Server Error"
                })
            }
            if (result && result.length !== 0) {
                const compare = (body.UserPassword === result.Password ? true : false);

                if (compare) {
                    const token = generateToken({ LoginName: body.LoginName });
                    // console.log(result.Userid)
                    return res.status(200).json({
                        success: 1,
                        message: "login Successfull",
                        token: token,
                        user_id:result.Userid,
                        name : result.UserName,
                        AdminID :result.Adminid,
                    })
                }
                else {
                    // console.log("hi")
                    return res.status(401).json({
                        success: 0,
                        message: "Invalid user or password"
                    })
                }
            }
            else {
                // console.log("err")
                return res.status(401).json({
                    success: 0,
                    message: "Invalid user or password"
                })
            }
        })

    },
    
}