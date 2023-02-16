import { Authenticator } from "../services/Authenticator";
import { CustomError } from "../services/CustomError";
import { AddressRepository } from "./AddressRepository";
import { ClientsRepository } from "./ClientsRepository";

export class GetAddressesBusiness{
    constructor(
        private addressDatabase:AddressRepository,
        private clientsDatabase:ClientsRepository
        ){}

    public getAddresses = async(token:string,cpf:string)=>{
        let statusCode = 500

        try {

            if(!token){
                statusCode = 412
                throw new CustomError(statusCode,'É necessário informar o token de acesso!')
            }
            if(!cpf){
                statusCode = 412
                throw new CustomError(statusCode,'É necessário informar o CPF do cliente que será excluido!')
            }

            const authenticator = new Authenticator() 
            const verifyToken = authenticator.verifyToken(token)

            if(!verifyToken){
                statusCode = 401
                throw new CustomError(statusCode,"O token informado é inválido.")
            }

            const client = await this.clientsDatabase.getByCpf(cpf)

            if(!client || client.length <1){
                statusCode = 404
                throw new CustomError(statusCode,"Não foi encontrado nenhum cliente com este CPF.")
            }

            const addresses = await this.addressDatabase.getByCpf(cpf)

            return addresses
        } catch (error:any) {
            throw new CustomError(error.statusCode || 400,error.message || error.sqlMessage)
        }
    }
}
