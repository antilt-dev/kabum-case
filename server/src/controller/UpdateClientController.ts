import { Request, Response } from 'express';
import { UpdateClientBusiness } from '../business/UpdateClientBusiness';

export class UpdateClientController {
  constructor(
    private updateClientBusiness:UpdateClientBusiness
  ){}

  public updateClient = async (req: Request, res: Response)=>{
    try {
      const cpf = req.params.cpf;
      const newValues = req.body;
      const token = req.headers.auth as string
      
      await this.updateClientBusiness.update(token,cpf,newValues)

      res.status(200).send('Cliente atualizado com sucesso!');
    } catch (err: any) {
      res.status(err.statusCode || 400).send({ message: err.message });
    }
  }

}