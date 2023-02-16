import {Request,Response} from 'express'
import { ClientDetailBusiness } from '../business/ClientDetailBusiness'



export class ClientDetailController{
    constructor(
        private clientDetailBusiness:ClientDetailBusiness
    ){}
    public getClient = async (req:Request,res:Response) =>{
        try {
            const cpf = req.params.cpf
            const token = req.headers.auth as string
            
            const clientDetails = await this.clientDetailBusiness.getClient(cpf,token)

            res.status(200).send(clientDetails)
          
        } catch (error:any) {
            return res.status(400).send({
                message: error.message
              });
        }
    }
}