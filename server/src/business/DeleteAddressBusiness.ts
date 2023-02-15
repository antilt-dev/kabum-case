import { AddressRepository } from "./AddressRepository";
import { Authenticator } from "../services/Authenticator";
import { CustomError } from "../services/CustomError";

export class DeleteAddressBusiness {
  constructor(private addressDatabase: AddressRepository) {}

  public async deleteAddress(addressId: string, token: string) {
    try {
      if (!addressId) {
        throw new CustomError(412, "É necessário informar o ID do endereço.");
      }

      if (!token) {
        throw new CustomError(412, "É necessário informar o token de acesso.");
      }

      const authenticator = new Authenticator();
      const tokenData = authenticator.verifyToken(token);

      if (!tokenData) {
        throw new CustomError(401, "Token inválido.");
      }

      const address = await this.addressDatabase.getById(addressId);

      if (!address) {
        throw new CustomError(404, "Endereço não encontrado.");
      }

      await this.addressDatabase.deleteById(addressId);
    } catch (error:any) {
      if (error.statusCode) {
        throw new CustomError(error.statusCode, error.message);
      }
      throw new CustomError(500, "Erro ao excluir o endereço.");
    }
  }
}