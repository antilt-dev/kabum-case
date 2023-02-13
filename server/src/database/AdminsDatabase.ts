import { AdminDTO } from "../models/AdminDTO";
import { BaseDatabase } from "./BaseDatabase";

export class AdminsDatabase extends BaseDatabase{
    TABLE_NAME = "admins"

    public async getAll(query?:string,sort?:string,order?:string):Promise<AdminDTO[]>{
        return super.getAll(query,sort,order)
    }
    public async getById(id:string):Promise<AdminDTO>{
        return super.getById(id)
    }
    public async create(item:any):Promise<void>{
        await super.create(item)
    }
    public async deleteById(id:string):Promise<void>{
        await super.deleteById(id)
    }
    public async update(id:string,newValues:any):Promise<void>{
        await super.update(id,newValues)
    }
}