import express from 'express'
import { AddressDatabase } from '../database/AddressDatabase'
import { ClientsDatabase } from '../database/ClientsDatabase'
import { GetAddressesBusiness } from '../business/GetAddressesBusiness';
import { GetAddressesController } from '../controller/GetAddressesController';

export const getAddressesRouter = express.Router();

const addressDatabase = new AddressDatabase()
const clientsDatabase = new ClientsDatabase()
const getAddressesBusiness = new GetAddressesBusiness(addressDatabase,clientsDatabase)
const getAddressesController = new GetAddressesController(getAddressesBusiness)

getAddressesRouter.get('/:cpf',getAddressesController.getAddresses)