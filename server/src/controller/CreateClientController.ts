import {Request,Response} from 'express'
import { CreateClientBusiness } from '../business/CreateClientBusiness'
import { ClientDTO } from '../models/ClientDTO'

export class CreateClientController{
    constructor(
        private createClientBusiness:CreateClientBusiness
    ){}
    public createClient = async (req:Request,res:Response)=>{
        try {
            const newClient = req.body
            const token = req.headers.auth as string

            await this.createClientBusiness.createClient(token,newClient)
        } catch (error:any) {
            return res.status(400).send({
                message: error.message
              });
        }
    }
}