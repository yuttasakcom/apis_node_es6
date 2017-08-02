import express from 'express'
const router = express.Router()

import HomeController from '../controllers/HomeController'

router.get('/', HomeController.home)

export default router