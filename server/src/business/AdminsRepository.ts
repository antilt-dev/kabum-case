import { AdminDTO } from "../models/AdminDTO"

export interface AdminsRepository{
    getAll(query?:string,sort?:string,order?:string):Promise<AdminDTO[]>
    getById(id:string):Promise<AdminDTO>
    create(item:any):Promise<void>
    deleteById(id:string):Promise<void>
    update(id:string,newValues:any):Promise<void>
    getByEmail(email:string):Promise<AdminDTO[]>
}