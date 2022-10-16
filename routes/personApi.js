import { Router } from "express";
import { getPerson } from "../controllers/personLogic.js";

const router = Router()

router.route('/').get(getPerson)

export default router
