import { BaseDatabase } from "./BaseDatabase";
import { ClientDTO } from "../models/ClientDTO";
import { ClientsRepository } from "../business/ClientsRepository";

export class ClientsDatabase extends BaseDatabase implements ClientsRepository{
    TABLE_NAME = "clients"

    public async getAll():Promise<ClientDTO[]>{
        return super.getAll()
    }
    public async getByCpf(cpf:string):Promise<ClientDTO[]>{
        const result = BaseDatabase.connection(this.TABLE_NAME)
        .select()
        .where({cpf})

        return result
    }
    public async create(item:any):Promise<void>{
        await super.create(item)
    }
    public async deleteByCpf(cpf:string):Promise<void>{
        await BaseDatabase.connection(this.TABLE_NAME)
        .delete()
        .where({cpf})
    }
    public async updateByCpf(cpf:string,newValues:any):Promise<void>{
        await BaseDatabase.connection(this.TABLE_NAME)
        .update(newValues)
        .where({cpf})
    }

}