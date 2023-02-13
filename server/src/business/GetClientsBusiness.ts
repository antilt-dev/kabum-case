import { ClientDTO } from "../models/ClientDTO";
import { ClientsRepository } from "./ClientsRepository";

export class GetClientsBusiness{
    constructor(
        private clientsDatabase:ClientsRepository
    ){}
    public getAllClients = async ()=>{
        try{
            const result:ClientDTO[] = await this.clientsDatabase.getAll()
            return result
        }catch(error:any){
            throw new Error(error.message || error.sqlMessage)
        }
    }
}