import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { AdminsRepository } from "./AdminsRepository";
import { CreateAdminDTO } from "../models/CreateAdminDTO";
import { generateId } from "../services/generateId";
import { CustomError } from "../services/CustomError";

export class SignupBusiness{
    constructor(
        private AdminsDatabase:AdminsRepository
    ){}
    public signup = async (newAdmin:CreateAdminDTO) =>{
        
        let statusCode = 500
        try {
            let {email,name,password} = newAdmin
            const id = generateId() as string
            if(!name){
                statusCode = 412
                throw new CustomError(statusCode,'É necessário informar o nome do administrador.')
            }
            if(!email){
                statusCode = 412
                throw new CustomError(statusCode,'É necessário informar o email do administrador.')
            }
            
            email = email.toLowerCase()
            name = name.toUpperCase()
    
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
            if (!passwordRegex.test(password)) {
                statusCode = 401
                throw new CustomError(statusCode,"A senha deve conter letras maiúsculas, minúsculas, números e caractéres especiais!");
            }
            const hashManager = new HashManager()
            const hashPassword = await hashManager.hash(password)
            await this.AdminsDatabase.create({
                name,
                email,
                id,
                password:hashPassword
            })
            const authenticator = new Authenticator()
            const token = authenticator.generateToken(id)
            return token
    
        } catch (error:any) {
            throw new CustomError(error.statusCode || 400,error.message || error.sqlMessage)
        }
       
    }
}