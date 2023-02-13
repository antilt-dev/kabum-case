import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { ClientsRepository } from "./ClientsRepository";
import { CreateAdminDTO } from "../models/CreateAdminDTO";
import { generateId } from "../services/generateId";
import { CustomError } from "../services/CustomError";

export class SignupBusiness{
    constructor(
        private ClientsDatabse:ClientsRepository
    ){}
    public signup = async (newAdmin:CreateAdminDTO) =>{
        const {email,name,password} = newAdmin
        const id = generateId() as string
        let statusCode = 500
        
        if(!name){
            statusCode = 412
            throw new CustomError(statusCode,'É necessário informar o nome do administrador.')
        }
        if(!email){
            statusCode = 412
            throw new CustomError(statusCode,'É necessário informar o email do administrador.')
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(password)) {
            statusCode = 401
        throw new CustomError(statusCode,"A senha deve conter letras maiúsculas, minúsculas, números e caractéres especiais!");
        }
        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)
        await this.ClientsDatabse.create({
            name,
            email,
            id,
            password:hashPassword
        })
        const authenticator = new Authenticator()
        const token = authenticator.generateToken(id)
        return token

    }
}