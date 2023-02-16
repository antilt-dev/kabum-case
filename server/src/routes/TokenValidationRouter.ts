import express from 'express'
import { TokenValidationBusiness } from "../business/TokenValidationBusiness";
import { TokenValidationController } from "../controller/TokenValidationController";

export const tokenValidationRouter = express.Router()

const tokenValidationBusiness = new TokenValidationBusiness()
const tokenValidationController = new TokenValidationController(tokenValidationBusiness)

tokenValidationRouter.get("/:token",tokenValidationController.validateToken)