import { Authenticator } from "../services/Authenticator";
import { CustomError } from "../services/CustomError";
import { ClientsRepository } from "./ClientsRepository";

export class UpdateClientBusiness{
    constructor(private clientsDatabase:ClientsRepository){}

    public update = async(token:string,cpf:string,newValues:any)=>{
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

            await this.clientsDatabase.updateByCpf(cpf,newValues)

        } catch (error:any) {
            throw new CustomError(error.statusCode || 400,error.message || error.sqlMessage)
        }
    }
}