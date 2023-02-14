import { ClientAddressDTO } from "../models/ClientAddressDTO";
import { BaseDatabase } from "./BaseDatabase";

export class ClientsAdressDatabase extends BaseDatabase{
    TABLE_NAME = "clients_address"

    public async getById(id:string):Promise<ClientAddressDTO>{
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
    public async getByCpf(cpf:string):Promise<ClientAddressDTO[]>{
        const result = await BaseDatabase.connection(this.TABLE_NAME)
        .select()
        .where({cpf})

        return result
    }
}