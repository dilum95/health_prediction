import { updateOne,deletedata } from "../lib/db.handler.js";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";

// add dependent
// http://localhost:5001/deletePredicts/631f8d122070c41a3fb0742es

export const deletePredict = async (req,res) => {
    
    const id = req.params.id;
    const currrntData = { _id: ObjectId(id) }

    await deletedata(currrntData,'med_prediction').then(result => {

        if (result.deletedCount == 1) {
            res.status(200).json({status: "success"});
        } else {
            res.status(200).json({status: "fail",msg: "Nothing Updated"});
        }

    }).catch(err => {
        console.log("🚀 ~ file: login.js ~ line 41 ~ findOne ~ err", err)
        res.status(200).json({ status: "fail", msg: "Expectation Failed" })
    })

};





