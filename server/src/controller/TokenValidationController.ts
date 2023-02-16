import { TokenValidationBusiness } from "../business/TokenValidationBusiness";
import { Request, Response } from "express";

export class TokenValidationController{
    constructor( private tokenValidationBusiness:TokenValidationBusiness){}
    public validateToken = async (req:Request, res:Response)=>{
        try{
            const token = req.params.token
            const tokenValid = await this.tokenValidationBusiness.isValid(token)
            res.status(200).send(tokenValid)
        }catch(error:any){
            return res.status(400).send({
                message: error.message
              });
        }
    }
}