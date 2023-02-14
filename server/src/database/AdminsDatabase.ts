import { AdminDTO } from "../models/AdminDTO";
import { BaseDatabase } from "./BaseDatabase";

export class AdminsDatabase extends BaseDatabase{
    TABLE_NAME = "admins"

    public async getAll():Promise<AdminDTO[]>{
        return super.getAll()
    }
    public async getById(id:string):Promise<AdminDTO>{
        return super.getById(id)
    }
    public async create(newAdmin:AdminDTO):Promise<void>{
        await super.create(newAdmin)
    }
    public async deleteById(id:string):Promise<void>{
        await super.deleteById(id)
    }
    public async update(id:string,newValues:any):Promise<void>{
        await super.update(id,newValues)
    }
    public async getByEmail(email:string):Promise<AdminDTO[]>{
        const admin = await BaseDatabase.connection(this.TABLE_NAME)
        .select()
        .where({email})
        return admin
    }
}