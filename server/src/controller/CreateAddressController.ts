import {Request,Response} from 'express'
import { CreateAddressBusiness } from '../business/CreateAddressBusiness'
import { AddressInputDTO } from '../models/AddressInputDTO';

export class CreateAddressController{
    constructor(
        private createAddressBusiness:CreateAddressBusiness
    ){}
    public createAddress = async (req:Request, res:Response) =>{
        try {
            const newAddress:AddressInputDTO = req.body
            const token = req.headers.auth as string

            await this.createAddressBusiness.createAddress(newAddress,token)

            res.status(201).send("Endereço adicionado com sucesso.")
        } catch (error:any) {
            return res.status(400).send({
                message: error.message
              });
        }
    }
}