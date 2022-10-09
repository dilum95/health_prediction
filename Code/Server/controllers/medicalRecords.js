import { insert,findOne } from "../lib/db.handler.js";
import fetch from 'node-fetch';


// add predicted data to database
// http://localhost:5001/medicalRecords
export const medicalRecords = async (req,res) => {
    const prediction = req.body;

    await insert(prediction, 'med_records').then(result => {                         
        res.status(200).json({ status:'success'});

    }).catch(err => {
        console.error(err)
        res.status(400).json({status:"fail", msg: 'Expectation Failed' });

    })

};






