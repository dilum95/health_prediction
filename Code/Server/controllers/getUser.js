import { findOne } from "../lib/db.handler.js";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";

// get user personal data
// http://localhost:5000/getuser/631f8d122070c41a3fb0742e
export const getUser = async (req,res) => {
    
    const userId = req.params.id
    const query = { _id: ObjectId(userId) }

    await findOne(query, 'med_users').then(result => {
            
        if (result) {
            delete result.password;
            res.status(200).json({status: "success",...result })
        } else {
            res.status(200).json({ status:"fail",msg: "No data found" })
        }

    }).catch(err => {
        console.log("🚀 ~ file: login.js ~ line 41 ~ findOne ~ err", err)
        res.status(200).json({ status:"fail",msg: "Expectation Failed" })
    })

};





