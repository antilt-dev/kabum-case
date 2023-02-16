import express from 'express'
import { UpdateClientController } from '../controller/UpdateClientController';
import { UpdateClientBusiness } from '../business/UpdateClientBusiness';
import { ClientsDatabase } from '../database/ClientsDatabase';

export const updateClientRouter = express.Router();

const clientsDatabase = new ClientsDatabase();
const updateClientBusiness = new UpdateClientBusiness(clientsDatabase)
const updateClientController = new UpdateClientController(updateClientBusiness);

updateClientRouter.put("/update/:cpf", updateClientController.updateClient);
