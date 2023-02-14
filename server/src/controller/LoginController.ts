import {Request,Response} from 'express'
import { LoginBusiness } from '../business/LoginBusiness'
import { LoginInputDTO } from '../models/LoginInputDTO'


export class LoginController{
    constructor(
        private loginBusiness:LoginBusiness
    ){}
    public login = async (req:Request,res:Response) =>{
        try {
            const {email,password}:LoginInputDTO = req.body
            const input = {
                email,
                password
            }
            const token = await this.loginBusiness.login(input)
            res.status(201).send(token);
          
        } catch (error:any) {
            return res.status(400).send({
                message: error.message
              });
        }
    }
}