import { ClientDTO } from "../models/ClientDTO"

export interface ClientsRepository{
    getAll():Promise<ClientDTO[]>
    getByCpf(cpf:string):Promise<ClientDTO[]>
    create(item:any):Promise<void>
    deleteByCpf(cpf:string):Promise<void>
    updateByCpf(cpf:string,newValues:any):Promise<void>
}