import {Request,Response} from 'express'
import { SignupBusiness } from '../business/SignupBusiness'
import { CreateAdminDTO } from '../models/CreateAdminDTO'

export class SignupController{
    constructor(
        private SignupBusiness:SignupBusiness
    ){}
    public Signup = async (req:Request,res:Response) =>{
        try {
            const {name,email,password}:CreateAdminDTO = req.body
            const input = {
                name,
                email,
                password
            }
            const token = await this.SignupBusiness.signup(input)
            res.status(201).send(token);
          
        } catch (error:any) {
            return res.status(400).send({
                message: error.message
              });
        }
    }
}