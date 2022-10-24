import express from "express"
import {signin,login} from "../controllers/registerHandle.js";
import {healthPrediction} from "../controllers/healthPrediction.js";
import {medicalRecords} from "../controllers/medicalRecords.js";
import {getUser} from "../controllers/getUser.js";
import {updateUser} from "../controllers/updateUser.js";
import {medicalHistory,allMeddicalRecords,singleMeddicalRecords} from "../controllers/medicalHistory.js";
import {addDependen} from "../controllers/addDependen.js";
import {dependentList} from "../controllers/dependentList.js";
import upload from "../controllers/upload.js";
import {updateAnUserImage} from "../controllers/updateAnUserImage.js";
import {deleteRecord} from "../controllers/deleteRecord.js";
import {deletePredict} from "../controllers/deletePredict.js";


const router = express.Router();

router.post("/register",signin)
router.post("/login",login)
router.post("/medicalRecords",medicalRecords)
router.post("/healthPrediction",healthPrediction)
router.get("/getuser/:id",getUser)
router.put("/updateUser/:id",updateUser)
router.get("/medicalHistory/:id",medicalHistory)
router.get("/allMeddicalRecords/:id",allMeddicalRecords)
router.get("/singleMeddicalRecords/:id",singleMeddicalRecords)
router.put("/addDependen/:id",addDependen)
router.get("/dependentList/:email",dependentList)
router.patch("/upload/:id",upload,updateAnUserImage)
router.put("/updateAnUserImage/:id",updateAnUserImage)
router.delete("/deleteRecord/:id",deleteRecord)
router.delete("/deletePredict/:id",deletePredict)

export default router;     
 