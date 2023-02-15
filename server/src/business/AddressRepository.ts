import { AddressDTO } from "../models/AddressDTO";

export interface AddressRepository{
    getById(id:string):Promise<AddressDTO>
    create(item:any):Promise<void>
    deleteById(id:string):Promise<void>
    update(id:string,newValues:any):Promise<void>
    getByCpf(cpf:string):Promise<AddressDTO[]>
    deleteByCpf(cpf:string):Promise<void>
}