import { ClientDTO } from "../models/ClientDTO";
import { Authenticator } from "../services/Authenticator";
import { CustomError } from "../services/CustomError";
import { ClientsRepository } from "./ClientsRepository";

export class ShowClientsBusiness{
    constructor(
        private clientsDatabase:ClientsRepository
    ){}
    public getAllClients = async (token:string)=>{
        let statusCode = 500

        try {

            if(!token){
                statusCode = 412
                throw new CustomError(statusCode,'É necessário informar o token de acesso!')
            }
            const authenticator = new Authenticator() 
            const verifyToken = authenticator.verifyToken(token)

            if(!verifyToken){
                statusCode = 401
                throw new CustomError(statusCode,"O token informado é inválido.")
            }
            const result:ClientDTO[] = await this.clientsDatabase.getAll()

            return result
            
        }catch(error:any){
            throw new Error(error.message || error.sqlMessage)
        }
    }
}