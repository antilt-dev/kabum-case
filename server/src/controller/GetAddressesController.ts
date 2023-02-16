import { Request, Response } from 'express';
import { GetAddressesBusiness } from '../business/GetAddressesBusiness';
import { UpdateAddressBusiness } from '../business/UpdateAddressBusiness';

export class GetAddressesController{
    constructor(private getAddressesBusiness:GetAddressesBusiness){}

    public getAddresses = async (req:Request,res:Response)=>{
        try {
            const token = req.headers.auth as string;
            const cpf = req.params.cpf

            const addresses = await this.getAddressesBusiness.getAddresses(token,cpf)

            res.status(200).send(addresses);
        } catch  (err: any) {
            res.status(err.statusCode || 400).send({ message: err.message });
          }
    }


}