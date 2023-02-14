import { ClientsRepository } from "./ClientsRepository";
import { Authenticator } from "../services/Authenticator";
import { CustomError } from "../services/CustomError";
import { AddressRepository } from "./AddressRepository";


export class DeleteClientBusiness{
    constructor(
        private clientsDatabase:ClientsRepository,
        private addressDatabase:AddressRepository
    ){}
    public deleteClient = async (cpf:string,token:string)=>{
        let statusCode = 500
        try{
            const authenticator = new Authenticator() 

            if(!token){
                statusCode = 412
                throw new CustomError(statusCode,'É necessário informar o token de acesso!')
            }
            if(!cpf){
                statusCode = 412
                throw new CustomError(statusCode,'É necessário informar o CPF do cliente que será excluido!')
            }
            const verifyToken = authenticator.verifyToken(token)

            if(!verifyToken){
                statusCode = 401
                throw new CustomError(statusCode,"Você não tem permissão para acessar estes dados!")
            }

            const client = await this.clientsDatabase.getByCpf(cpf)

            if(!client || client.length <1){
                statusCode = 404
                throw new CustomError(statusCode,"Não foi encontrado nenhum cliente com este CPF.")
            }

            await this.addressDatabase.deleteBtCpf(cpf)
            
            await this.clientsDatabase.deleteByCpf(cpf)
        }catch(error:any){
            throw new Error(error.message || error.sqlMessage)
        }
    }
}