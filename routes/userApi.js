import { Router } from "express";
import {registerUser, confirmUser} from '../controllers/userApiLogic.js'

const router = Router()

router.route('/register').post(registerUser)

router.route('/login').post(confirmUser)


export default router