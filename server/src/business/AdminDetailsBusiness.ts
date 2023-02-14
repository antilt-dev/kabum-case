import { AdminDTO } from "../models/AdminDTO";
import { AdminsRepository } from "./AdminsRepository";

export class AdminDetailsBusiness{
    constructor(
        private adminsDatabase:AdminsRepository
    ){}
    public getAdmin = async (id:string)=>{
        try{
            const result:AdminDTO = await this.adminsDatabase.getById(id)
            return result
        }catch(error:any){
            throw new Error(error.message || error.sqlMessage)
        }
    }
}
