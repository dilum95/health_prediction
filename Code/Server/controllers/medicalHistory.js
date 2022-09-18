import { findAll } from "../lib/db.handler.js";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";
import  spawn  from  'child_process';
import fetch from 'node-fetch';


// get medical history
// http://localhost:5001/medicalHistory/631f84372024141e981fd185
export const medicalHistory = async (req,res) => {

    const userId = req.params.id
    const query = { user: userId }

    await findAll(query, 'med_prediction').then(result => {
            
        if (result) {
            res.status(200).json({status: "success",data:result })
        } else {
            res.status(200).json({ status:"fail",msg: "No data found" })
        }

    }).catch(err => {
        console.log("🚀 ~ file: login.js ~ line 41 ~ findOne ~ err", err)
        res.status(200).json({ status:"fail",msg: "Expectation Failed" })
    })

};





