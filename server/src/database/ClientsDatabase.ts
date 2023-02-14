import { BaseDatabase } from "./BaseDatabase";
import { ClientDTO } from "../models/ClientDTO";

export class ClientsDatabase extends BaseDatabase{
    TABLE_NAME = "clients"

    public async getAll():Promise<ClientDTO[]>{
        return super.getAll()
    }
    public async getById(id:string):Promise<ClientDTO>{
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