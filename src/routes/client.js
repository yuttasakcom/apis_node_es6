import express from 'express'
const router = express.Router()
import ClientController from '../controllers/ClientController'

router.post('/create', ClientController.hello)

export default router