import { AdminDTO } from "../models/AdminDTO"

export interface AdminsRepository{
    getByEmail(email:string):Promise<AdminDTO[]>
}