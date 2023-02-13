import { AdminDTO } from "../models/AdminDTO";
import { AdminsRepository } from "./AdminsRepository";

export class GetClientsBusiness{
    constructor(
        private clientsDatabase:AdminsRepository
    ){}
    public getAllClients = async ()=>{
        try{
            const result:AdminDTO[] = await this.clientsDatabase.getAll()
            return result
        }catch(error:any){
            throw new Error(error.message || error.sqlMessage)
        }
    }
}