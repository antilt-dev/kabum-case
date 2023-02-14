import { AdminsDatabase } from "../database/AdminsDatabase";

export class DeleteAdminBusiness{
    constructor(
        private adminDatabse:AdminsDatabase
    ){}
    public deleteAdmin = async (id:string)=>{
        try{
            await this.adminDatabse.deleteById(id)
        }catch(error:any){
            throw new Error(error.message || error.sqlMessage)
        }
    }
}