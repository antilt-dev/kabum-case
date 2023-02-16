import { ClientsRepository } from "./ClientsRepository";
import { Authenticator } from "../services/Authenticator";
import { CustomError } from "../services/CustomError";
import { ClientDTO } from "../models/ClientDTO";

export class CreateClientBusiness{
    constructor(
        private clientsDatabase:ClientsRepository
    ){}
    public createClient = async (token:string,newClient:ClientDTO)=>{
        let statusCode = 500
        try {
            if(!token){
                statusCode = 412
                throw new CustomError(statusCode,'É necessário informar o token de acesso!')
            }
            if(!newClient){
                statusCode = 412
                throw new CustomError(statusCode,'É necessário todos os campos do novo cliente.')
            }

            const authenticator = new Authenticator() 
            const verifyToken = authenticator.verifyToken(token)

            if(!verifyToken){
                statusCode = 401
                throw new CustomError(statusCode,"O token informado é inválido.")
            }

            if(newClient.cpf.length != 11 || isNaN(Number(newClient.cpf.length))){
                statusCode = 412
                throw new CustomError(statusCode,'O CPF deve ter 11 números.')
            }
            if(newClient.rg.length != 10 || isNaN(Number(newClient.rg.length))){
                statusCode = 412
                throw new CustomError(statusCode,'O RG deve ter 10 números.')
            }
            if(newClient.phone.length < 10 ){
                statusCode = 412
                throw new CustomError(statusCode,'O telefone deve ter código do país, código de área e número (sem hífen ou parenteses).')
            }
            if(newClient.name.length < 3 ){
                statusCode = 412
                throw new CustomError(statusCode,'O nome fornecido é muito curto.')
            }

            const checkCpf = await this.clientsDatabase.getByCpf(newClient.cpf)

            if(checkCpf.length > 0){
                statusCode = 406
                throw new CustomError(statusCode,'O CPF informado já está cadastrado.')
            }

            await this.clientsDatabase.create(newClient)

        
    }catch (error:any) {
        throw new CustomError(error.statusCode || 400,error.message || error.sqlMessage)
    }
}
}