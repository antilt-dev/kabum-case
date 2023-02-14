import { Request,Response } from "express";
import { GetClientsBusiness } from "../business/GetClientsBusiness";

export class GetClientsController{
     constructor(
        private getClientsBusiness:GetClientsBusiness
    ){}
    public getAllClients = async (req:Request,res:Response) =>{
        try {
            const clients = await this.getClientsBusiness.getAllClients()
            res.status(200).send(clients)
        } catch (error:any) {
            return res.status(400).send({
                message: error.message
              });
        }
    }
}