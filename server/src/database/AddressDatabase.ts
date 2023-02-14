import { AddressDTO } from "../models/AddressDTO";
import { BaseDatabase } from "./BaseDatabase";

export class AddressDatabase extends BaseDatabase{
    TABLE_NAME = "clients_address"

    public async getById(id:string):Promise<AddressDTO>{
        return super.getById(id)
    }
    public async create(item:AddressDTO):Promise<void>{
        await super.create(item)
    }
    public async deleteById(id:string):Promise<void>{
        await super.deleteById(id)
    }
    public async update(id:string,newValues:any):Promise<void>{
        await super.update(id,newValues)
    }
    public async getByCpf(cpf:string):Promise<AddressDTO[]>{
        const result = await BaseDatabase.connection(this.TABLE_NAME)
        .select()
        .where({cpf})

        return result
    }
    public async deleteByCpf(cpf:string):Promise<void>{
        await BaseDatabase.connection(this.TABLE_NAME)
        .delete()
        .where({client_cpf:cpf})
    }
}