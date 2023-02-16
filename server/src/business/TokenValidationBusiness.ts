import { Authenticator } from "../services/Authenticator"
import { CustomError } from "../services/CustomError"

export class TokenValidationBusiness{
    constructor(){}
    
    public isValid = (token:string) =>{
        let statusCode = 500
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
        return true
    }
}