import { findAll } from "../lib/db.handler.js";
import bcrypt from "bcryptjs";

// get dependent list
// http://localhost:5001/dependentList/baba@gmail.com 
export const dependentList = async (req,res) => {
    
    const email = req.params.email
    const query = { dependent: email }

    await findAll(query, 'med_users').then(result => {
            
        if (result) {
            const final_result=[]

            for(let i=0;i<result.length;i++){
                delete result[i].password 
                delete result[i].dependent 
                delete result[i].birthday 
                final_result.push(result[i])
            }
            res.status(200).json({status: "success",data:final_result })
        } else {
            res.status(200).json({ status:"fail",msg: "No data found" })
        }

    }).catch(err => {
        console.log("🚀 ~ file: login.js ~ line 41 ~ findOne ~ err", err)
        res.status(200).json({ status:"fail",msg: "Expectation Failed" })
    })

};





