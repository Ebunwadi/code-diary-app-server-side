import { Router } from "express";
import {getCodeDocs, createCodeDocs, deleteCodeDocs, updateCodeDocs} from '../controllers/codeApiLogic.js'

const router = Router()

router.route('/').get(getCodeDocs).post(createCodeDocs)

router.route('/:id').delete(deleteCodeDocs).patch(updateCodeDocs)

export default router