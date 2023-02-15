// import { Request, Response } from 'express';
// import { UpdateClientBusiness } from '../business/UpdateClientBusiness';
// import { ClientDTO } from '../models/ClientDTO';

// export class UpdateClientController {
//   constructor(private updateClientBusiness: UpdateClientBusiness) {}

//   public async updateClient(req: Request, res: Response) {
//     try {
//       const { cpf } = req.params;
//       const clientDTO: ClientDTO = req.body;
      
//       await this.updateClientBusiness.updateClient(cpf, clientDTO);

//       res.status(200).send('Cliente atualizado com sucesso!');
//     } catch (err: any) {
//       res.status(err.statusCode || 400).send({ message: err.message });
//     }
//   }
// }