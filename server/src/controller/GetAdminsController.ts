import { Request,Response } from "express";
import { GetAdminsBusiness } from "../business/GetAdminsBusiness";

export class GetClientsController{
     constructor(
        private getAdminsBusiness:GetAdminsBusiness
    ){}
    public getAllClients = async (req:Request,res:Response) =>{
        try {
            const clients = await this.getAdminsBusiness.getAllAdmins()
            res.status(200).send(clients)
        } catch (error:any) {
            return res.status(400).send({
                message: error.message
              });
        }
    }
}