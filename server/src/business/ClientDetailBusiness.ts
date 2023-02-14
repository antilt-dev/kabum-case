import { ClientDTO } from "../models/ClientDTO";
import { ClientsRepository } from "./ClientsRepository";

export class ClientDetailBusiness{
    constructor(
        private clientsDatabase:ClientsRepository
    ){}
    public getClient = async (id:string)=>{
        try{
            const result:ClientDTO = await this.clientsDatabase.getById(id)
            return result
        }catch(error:any){
            throw new Error(error.message || error.sqlMessage)
        }
    }
}