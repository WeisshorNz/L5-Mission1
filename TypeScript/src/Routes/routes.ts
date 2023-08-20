import express from "express";
import { carValue } from "../Contollers/api1Controller";
import { riskRating } from "../Contollers/api2Controller";
import { getPremium } from "../Contollers/api3Contoller";

const router = express.Router();

router.post('/carValue', carValue);
router.post('/riskRating', riskRating);
router.post('/getPremium', getPremium);

export default router;