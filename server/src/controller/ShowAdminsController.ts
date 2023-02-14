import { Request,Response } from "express";
import { ShowAdminsBusiness } from "../business/ShowAdminsBusiness";

export class ShowAdminsController{
     constructor(
        private showAdminsBusiness:ShowAdminsBusiness
    ){}
    public getAllAdmins = async (req:Request,res:Response) =>{
        try {
            const token:string = req.headers.auth as string
            const clients = await this.showAdminsBusiness.getAllAdmins(token)
            res.status(200).send(clients)
        } catch (error:any) {
            return res.status(400).send({
                message: error.message
              });
        }
    }
}