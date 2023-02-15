import { ClientDTO } from "../models/ClientDTO";
import { ClientsRepository } from "./ClientsRepository";
import { CustomError } from "../services/CustomError";
import { Authenticator } from "../services/Authenticator";
import { AddressDatabase } from "../database/AddressDatabase";

export class ClientDetailBusiness{
    constructor(
        private clientsDatabase:ClientsRepository,
        private addressDatabase:AddressDatabase
    ){}
    public getClient = async (cpf:string,token:string)=>{
        let statusCode = 500
        try{
            
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

            const client:ClientDTO[] = await this.clientsDatabase.getByCpf(cpf)

            if(!client || client.length <1){
                statusCode = 404
                throw new CustomError(statusCode,"Não foi encontrado nenhum cliente com este CPF.")
            }

            const clientAddresses = await this.addressDatabase.getByCpf(cpf)

            const fullDetails = {
                client,
                clientAddresses
            }
            
            return fullDetails

        }catch(error:any){
            throw new CustomError(error.statusCode || 400,error.message || error.sqlMessage)
        }
    }
}