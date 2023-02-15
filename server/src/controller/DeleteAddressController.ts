import { Request, Response } from 'express';
import { DeleteAddressBusiness } from '../business/DeleteAddressBusiness';

export class DeleteAddressController {
  constructor(
    private deleteAddressBusiness: DeleteAddressBusiness
  ) {}

  public deleteAddress = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      const token: string = req.headers.auth as string;

      await this.deleteAddressBusiness.deleteAddress(id, token);

      res.status(200).send('Endereço excluído com sucesso!');
    } catch (error: any) {
      res.status(error.statusCode || 500).send({
        message: error.message || 'Erro ao excluir endereço.'
      });
    }
  }
}