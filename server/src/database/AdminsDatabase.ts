import { AdminDTO } from "../models/AdminDTO";
import { BaseDatabase } from "./BaseDatabase";

export class AdminsDatabase extends BaseDatabase{
    TABLE_NAME = "admins"

    public async getByEmail(email:string):Promise<AdminDTO[]>{
        const admin = await BaseDatabase.connection(this.TABLE_NAME)
        .select()
        .where({email})
        return admin
    }
}