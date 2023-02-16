import {Request,Response} from 'express'
import { DeleteClientBusiness } from '../business/DeleteClientBusiness'


export class DeleteClienteController{
    constructor(
        private deleteClientBusiness:DeleteClientBusiness
    ){}
    public deleteClient = async (req:Request,res:Response) =>{
        try {
            const cpf = req.params.cpf
            const token = req.headers.auth as string
            
            await this.deleteClientBusiness.deleteClient(cpf,token)

            res.status(200).send("Cliente excluido com sucesso!")
          
        } catch (error:any) {
            return res.status(400).send({
                message: error.message
              });
        }
    }
}