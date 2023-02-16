import { Request, Response } from 'express';
import { UpdateAddressBusiness } from '../business/UpdateAddressBusiness';

export class UpdateAddressController{
    constructor(private updateAddressBusiness:UpdateAddressBusiness){}

    public updateAddress = async (req:Request,res:Response)=>{
        try {
           const id = req.params.id;
           const newValues = req.body;
           const token = req.headers.auth as string

           await this.updateAddressBusiness.update(token,id,newValues)
           res.status(200).send('Endereço atualizado com sucesso!');
        } catch (err: any) {
            res.status(err.statusCode || 400).send({ message: err.message });
          }
    }
}