import express from "express"
import {signin,login} from "../controllers/registerHandle.js";
import {healthPrediction} from "../controllers/healthPrediction.js";
import {getUser} from "../controllers/getUser.js";
import {updateUser} from "../controllers/updateUser.js";
import {medicalHistory} from "../controllers/medicalHistory.js";
import {addDependen} from "../controllers/addDependen.js";
import {dependentList} from "../controllers/dependentList.js";
import upload from "../controllers/upload.js";
import {updateAnUserImage} from "../controllers/updateAnUserImage.js";


const router = express.Router();

router.post("/register",signin)
router.post("/login",login)
router.post("/healthPrediction",healthPrediction)
router.get("/getuser/:id",getUser)
router.put("/updateUser/:id",updateUser)
router.get("/medicalHistory/:id",medicalHistory)
router.put("/addDependen/:id",addDependen)
router.get("/dependentList/:email",dependentList)
router.patch("/upload/:id",upload,updateAnUserImage)

export default router;     

// router.get("/users",getUsers)
// router.post("/user",createUser)
// router.get("/users/:id",getUser)
// router.delete("/users/:id",deleteUser)
// router.put("/users/:id",updateUser)