import express from 'express'
const router = express.Router()
const { Authen } = require('../middleware/Authen')
const { AllowRoles } = require('../middleware/AllowRoles')

import AdminController from '../controllers/AdminController'

router.get('/', [
  Authen,
  AllowRoles,
], AdminController.index)

export default router