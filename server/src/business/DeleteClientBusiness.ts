import { ClientsRepository } from "./ClientsRepository";

export class DeleteClientBusiness{
    constructor(
        private clientsDatabase:ClientsRepository
    ){}
    public deleteClient = async (id:string,token:string)=>{
        let statusCode = 500
        try{
            await this.clientsDatabase.deleteById(id)
        }catch(error:any){
            throw new Error(error.message || error.sqlMessage)
        }
    }
}