import { Authenticator } from "../services/Authenticator";
import { CustomError } from "../services/CustomError";
import { AddressRepository } from "./AddressRepository";

export class UpdateAddressBusiness{
    constructor(private addressDatabase:AddressRepository){}

    public update = async(token:string,id:string,newValues:any)=>{
        let statusCode = 500
        try {
             
            if(!token){
                statusCode = 412
                throw new CustomError(statusCode,'É necessário informar o token de acesso!')
            }
            if(!id){
                statusCode = 412
                throw new CustomError(statusCode,'É necessário informar o ID do endereço!')
            }

            const authenticator = new Authenticator() 
            const verifyToken = authenticator.verifyToken(token)

            if(!verifyToken){
                statusCode = 401
                throw new CustomError(statusCode,"O token informado é inválido.")
            }

            const address = await this.addressDatabase.getById(id)

            if(!address || address.length <1){
                statusCode = 404
                throw new CustomError(statusCode,"Não foi encontrado nenhum endereço com o ID informado!")
            }

            await this.addressDatabase.update(id,newValues)
            
    }catch (error:any) {
        throw new CustomError(error.statusCode || 400,error.message || error.sqlMessage)
    }
}
}