import express from 'express'
import { AdminsDatabase } from '../database/AdminsDatabase'
import { SignupBusiness } from '../business/SignupBusiness'
import { SignupController } from '../controller/SignupController'

export const signupRouter = express.Router()

const adminsDatabase = new AdminsDatabase()
const signupBusiness = new SignupBusiness(adminsDatabase)
const signupController = new SignupController(signupBusiness)

signupRouter.post("/",signupController.signup)