import { Request,Response } from "express";
import { ShowClientsBusiness } from "../business/ShowClientsBusiness";

export class ShowClientsController{
     constructor(
        private showClients:ShowClientsBusiness
    ){}
    public getAllClients = async (req:Request,res:Response) =>{
        try {
            const token = req.headers.auth as string
            const clients = await this.showClients.getAllClients(token)
            res.status(200).send(clients)
        } catch (error:any) {
            return res.status(400).send({
                message: error.message
              });
        }
    }
}