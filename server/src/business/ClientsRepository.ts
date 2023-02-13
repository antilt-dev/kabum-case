import { ClientDTO } from "../models/ClientDTO"

export interface ClientsRepository{
    getAll(query?:string,sort?:string,order?:string):Promise<ClientDTO[]>
    getById(id:string):Promise<ClientDTO>
    create(item:any):Promise<void>
    deleteById(id:string):Promise<void>
    update(id:string,newValues:any):Promise<void>
}