import { ClientDTO } from "../models/ClientDTO"

export interface ClientsRepository{
    getAll():Promise<ClientDTO[]>
    getByCpf(id:string):Promise<ClientDTO[]>
    create(item:any):Promise<void>
    deleteByCpf(id:string):Promise<void>
    update(id:string,newValues:any):Promise<void>
}