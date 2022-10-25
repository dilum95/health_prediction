import { insert,findOne } from "../lib/db.handler.js";
import bcrypt from "bcryptjs";

// encrypt pwd
const encryptPassword = (pwd) => {

    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, function (err, Salt) {
            // The bcrypt is used for encrypting pwd.
            bcrypt.hash(pwd, Salt, function (err, hash) {
                if (err) {
                    reject(err)
                }
                resolve(hash)
            })
        })
    })

}

// check avilable user
const  checkAvaliableUser =(email) => {
    return new Promise((resolve, reject) => {

        const queryM = { email }
        
        findOne(queryM, 'med_users').then(result => {
            resolve(result)
        }).catch(err => {
            reject(err)
        })

    })

}

// signin
// http://localhost:5001/register
export const signin = async (req,res) => {
        const user = req.body;

        // check avialble user
        const resUser = await checkAvaliableUser(user.email).catch(err => console.error(err));

        if(!resUser){
            //encrypt password
            const password = await encryptPassword(user.password).catch(err => console.error(err));

            delete user.password
            const new_body = {password,...user};    
            await insert(new_body, 'med_users').then(result => {                            
                res.status(200).json({ status:'success'});
            }).catch(err => {
                console.error(err)
                res.status(400).json({status:"fail", msg: 'Expectation Failed' });

            })

        }else{
            console.log("already exist")
            res.status(200).json({status:"fail", msg: 'user already exist' });
        }

};

// login
// http://localhost:5001/login
export const login = async (req,res) => {
    const user = req.body;
    const query = { email: user.email }
    
    await findOne(query, 'med_users').then(result => {
        if (result) {
            // compair password
            bcrypt.compare(user.password, result.password, function (err, response) {
                if (err) {
                    console.log("🚀 ~ file: login.js ~ line 23 ~ bcrypt.compare ~ err", err)
                    res.status(417).json({status:"fail", msg: "password encrypt faild" })
                }
                if (response) {
                    delete result.password;
                    res.status(200).json({status: "success",...result })

                } else {
                    res.status(200).json({ status:"fail",msg: "Unauthorized" })
                }
            });

        } else {
            res.status(200).json({ status:"fail",msg: "Unauthorized" })
        }


    }).catch(err => {
        console.log("🚀 ~ file: login.js ~ line 41 ~ findOne ~ err", err)
        res.status(200).json({ status:"fail",msg: "Expectation Failed" })
    })

};





