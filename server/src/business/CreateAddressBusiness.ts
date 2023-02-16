import { AddressRepository } from "./AddressRepository";
import { AddressInputDTO } from "../models/AddressInputDTO";
import { generateId } from "../services/generateId";
import { AddressDTO } from "../models/AddressDTO";
import { Authenticator } from "../services/Authenticator";
import { CustomError } from "../services/CustomError";

export class CreateAddressBusiness{
    constructor(
        private addressDatabase:AddressRepository
    ){}
    public createAddress = async (newAddress:AddressInputDTO,token:string)=>{
        let statusCode = 500
        try {

            if(!token){
                statusCode = 412
                throw new CustomError(statusCode,'É necessário informar o token de acesso!')
            }
            if(!newAddress){
                statusCode = 412
                throw new CustomError(statusCode,'É necessário informar o endereço que será cadastrado.')
            }

            const authenticator = new Authenticator() 
            const verifyToken = authenticator.verifyToken(token)

            if(!verifyToken){
                statusCode = 401
                throw new CustomError(statusCode,"O token informado é inválido.")
            }
            
            const id = generateId()

            const address : AddressDTO = {
                id,
                client_cpf : newAddress.cpf,
                country : newAddress.country.toUpperCase(),
                state : newAddress.state.toUpperCase(),
                city : newAddress.city.toUpperCase(),
                zipcode : newAddress.zipcode,
                full_address : newAddress.full_address.toUpperCase()
            }

            await this.addressDatabase.create(address)

        } catch (error:any) {
            throw new CustomError(error.statusCode || 400,error.message || error.sqlMessage)
        }
    }
}