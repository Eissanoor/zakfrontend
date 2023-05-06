import express from "express";
import upload from "../config/multerConfig.js";

const router = express.Router();

import FATSDBODBC from "../controllers/controllersODBC.js";

import FATSDB from "../controllers/controlletrsMSSQL.js";
import {
  checkAuthentication,
  checkRole,
  generateToken,
} from "../helpers/apiAuth.js";
import logoUpload from "../config/multerLogoConfig.js";
router.post("/UserLoginAuth", FATSDB.UserLoginAuth);
router.post("/tblPostMembers", FATSDB.tblPostMembers);
router.get("/getMembersById/:memberID", FATSDB.getMembersById);
router.get("/getMembersAll", FATSDB.getMembersAll);
router.get("/ListOfDropDownCities", FATSDB.ListOfDropDownCities);
router.get("/ListOfDropDownProvince", FATSDB.ListOfDropDownProvince);
export default router;
