import { AdminDTO } from "../models/AdminDTO";
import { Authenticator } from "../services/Authenticator";
import { CustomError } from "../services/CustomError";
import { AdminsRepository } from "./AdminsRepository";

export class ShowAdminsBusiness{
    constructor(
        private adminsDatabase:AdminsRepository
    ){}
    public getAllAdmins = async (token:string)=>{
        let statusCode = 500
        try{
            const authenticator = new Authenticator() 

            if(!token){
                statusCode = 412
                throw new CustomError(statusCode,'É necessário informar o token de acesso!')
            }

            const verifyToken = authenticator.verifyToken(token)
            if(!verifyToken){
                statusCode = 401
                throw new CustomError(statusCode,"Você não tem permissão para acessar estes dados!")
            }
            
            const result:AdminDTO[] = await this.adminsDatabase.getAll()
            return result
        }catch(error:any){
            throw new CustomError(error.statusCode || 400,error.message || error.sqlMessage)
        }
    }
}