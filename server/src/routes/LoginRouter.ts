import express from 'express'
import { AdminsDatabase } from '../database/AdminsDatabase'
import { LoginBusiness } from '../business/LoginBusiness'
import { LoginController } from '../controller/LoginController'

export const loginRouter = express.Router()

const adminsDatabase = new AdminsDatabase()
const loginBusiness = new LoginBusiness(adminsDatabase)
const loginController = new LoginController(loginBusiness)

loginRouter.post("/",loginController.login)