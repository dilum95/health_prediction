import { insert,findOne } from "../lib/db.handler.js";
import fetch from 'node-fetch';


// add predicted data to database
// http://localhost:5000/healthprediction
export const healthPrediction = async (req,res) => {
    const prediction = req.body;

// #####################################################################################
// #####################################################################################
// let url = "http://localhost:5000/";
//     fetch(url, {
//         method: 'GET'
// }).then(response => console.log(response.json()));
    
// #####################################################################################
// #####################################################################################

    await insert(prediction, 'med_prediction').then(result => {                            
        res.status(200).json({ status:'success'});

    }).catch(err => {
        console.error(err)
        res.status(400).json({status:"fail", msg: 'Expectation Failed' });

    })

};






