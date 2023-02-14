import { AddressRepository } from "./AddressRepository";
import { AddressInputDTO } from "../models/AddressInputDTO";
import { generateId } from "../services/generateId";
import { AddressDTO } from "../models/AddressDTO";

export class CreateAddressBusiness{
    constructor(
        private addressDatabase:AddressRepository
    ){}
    public createAddress = async (newAddress:AddressInputDTO)=>{
        try {
            const id = generateId()
            const address : AddressDTO = {
                id,
                client_cpf : newAddress.cpf,
                country : newAddress.country,
                state : newAddress.state,
                city : newAddress.city,
                zipcode : newAddress.zipcode,
                street : newAddress.street,
                address_number : newAddress.address_number,
                address_line_2 : newAddress.address_line_2
            }

            await this.addressDatabase.create(address)
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
}