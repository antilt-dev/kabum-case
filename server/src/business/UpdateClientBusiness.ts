import { ClientsRepository } from "./ClientsRepository";
import { ClientDTO } from "../models/ClientDTO";
import { CustomError } from "../services/CustomError";
import { Authenticator } from "../services/Authenticator";

export class UpdateClientBusiness {
  constructor(private clientsDatabase: ClientsRepository) {}

  public updateClientd = async (id:string,client: ClientDTO) =>{
    if (!client.cpf || !client.rg || !client.name || !client.birthdate || !client.phone) {
      throw new Error("Preencha todos os campos obrigatórios.");
    }

    if (!/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(client.cpf)) {
      throw new Error("CPF inválido.");
    }

    if (!/^\d{2}\.\d{3}\.\d{3}-\d{1}$/.test(client.rg)) {
      throw new Error("RG inválido.");
    }

    const existingClient = await this.clientsDatabase.getByCpf(client.cpf);

    if (!existingClient) {
      throw new Error("Cliente não encontrado.");
    }

    await this.clientsDatabase.update(id,client);
  }



public updateClient = async (token:string,client: ClientDTO) =>{
    let statusCode = 500
        try{
            
            if(!token){
                statusCode = 412
                throw new CustomError(statusCode,'É necessário informar o token de acesso!')
            }
            if(!id){
                statusCode = 412
                throw new CustomError(statusCode,'É necessário informar o CPF do cliente que será excluido!')
            }

            const authenticator = new Authenticator() 
            const verifyToken = authenticator.verifyToken(token)

            if(!verifyToken){
                statusCode = 401
                throw new CustomError(statusCode,"O token informado é inválido.")
            }

            const client = await this.clientsDatabase.getById(id)

            if(!client || client.length <1){
                statusCode = 404
                throw new CustomError(statusCode,"Não foi encontrado nenhum cliente com este CPF.")
            }

}
}