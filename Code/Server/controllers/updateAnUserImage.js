import { updateOne } from "../lib/db.handler.js";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";

export const updateAnUserImage = async (req, res) => {
    const id = req.params.id;
    const img= req.body.img
    // const path = req.file.path.replace(/\\/g, "/")
    // req.body = {ProfilePicture: "http://localhost:5001/" + path}

    const currrntData = { _id: ObjectId(id) }
    const updateData = {
                            $set: {
                                image: img 
                            }
                        }
    await updateOne(currrntData, updateData, 'med_users').then(result => {
        if (result.modifiedCount == 1) {
            res.status(200).json({status: "success"});
        } else {
            res.status(200).json({status: "fail",msg: "Nothing Updated"});
        }

    }).catch(err => {
        console.log("🚀 ~ file: login.js ~ line 41 ~ findOne ~ err", err)
        res.status(200).json({ status: "fail", msg: "Expectation Failed" })
    })
    
   
}