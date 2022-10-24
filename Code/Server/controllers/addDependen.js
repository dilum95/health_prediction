import { updateOne } from "../lib/db.handler.js";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";

// add dependent
// http://localhost:5001/addDependen/631f8d122070c41a3fb0742e

export const addDependen = async (req,res) => {
    
    const userId = req.params.id
    const user = req.body;
    const currrntData = { _id: ObjectId(userId) }
    const updateData = {
                            $set: {
                                dependent: user.dependent
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

};





