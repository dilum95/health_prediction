import { updateOne } from "../lib/db.handler.js";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";

// update user
// http://localhost:5000/updateUser/631f8d122070c41a3fb0742e
export const updateUser = async (req,res) => {
    
    const userId = req.params.id
    const user = req.body;

    const currrntData = { _id: ObjectId(userId) }
    const updateData = {
                            $set: {
                                name: user.name,
                                dependent: user.dependent,
                                mobile:user.mobile
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





