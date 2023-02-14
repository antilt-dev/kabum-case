import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { AdminsRepository } from "./AdminsRepository";
import { LoginInputDTO } from "../models/LoginInputDTO";
import { CustomError } from "../services/CustomError";
import { AdminDTO } from "../models/AdminDTO";

export class LoginBusiness{
    constructor(private adminsDatabase:AdminsRepository){}
    public login = async (input:LoginInputDTO) =>{ 
        let statusCode = 500
        try {
            const {email,password} = input
            if(!email){
                statusCode = 412
                throw new CustomError(statusCode,'É necessário informar o email do administrador!')
            }
            if(!password){
                statusCode = 412
                throw new CustomError(statusCode,'É necessário informar a senha!')
            }
    
            let admin:AdminDTO[] = await this.adminsDatabase.getByEmail(email)
    
            if(!admin || admin.length < 1){
                statusCode = 404
                throw new CustomError(statusCode,'Nenhum cadastro foi encontrado com esse email!')
            }
    
            const hashManager = new HashManager()
            const checkPassword = await hashManager.compare(password,admin[0].password)
            if(!checkPassword){
                statusCode = 403
                throw new CustomError(statusCode,'Senha informada está incorreta!')
            }
    
            const authenticator = new Authenticator()
            const token = authenticator.generateToken(admin[0].id)
            return token
        } catch (error:any) {
            throw new CustomError(error.statusCode || 400,error.message || error.sqlMessage)
        }
       
    }
}
