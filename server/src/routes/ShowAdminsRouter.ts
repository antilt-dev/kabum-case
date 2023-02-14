import express from 'express'
import { ShowAdminsBusiness } from '../business/ShowAdminsBusiness'
import { ShowAdminsController } from '../controller/ShowAdminsController'
import { AdminsDatabase } from '../database/AdminsDatabase'

export const showAdminsRouter = express.Router()

const adminsDatabase = new AdminsDatabase()
const showAdminsBusiness = new ShowAdminsBusiness(adminsDatabase)
const showAdminsController = new ShowAdminsController(showAdminsBusiness)

showAdminsRouter.get('/getAll',showAdminsController.getAllAdmins)