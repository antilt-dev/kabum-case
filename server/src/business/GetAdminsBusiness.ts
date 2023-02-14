import { AdminDTO } from "../models/AdminDTO";
import { AdminsRepository } from "./AdminsRepository";

export class GetAdminsBusiness{
    constructor(
        private clientsDatabase:AdminsRepository
    ){}
    public getAllAdmins = async ()=>{
        try{
            const result:AdminDTO[] = await this.clientsDatabase.getAll()
            return result
        }catch(error:any){
            throw new Error(error.message || error.sqlMessage)
        }
    }
}