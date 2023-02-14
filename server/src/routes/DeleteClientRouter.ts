import express from 'express'
import { ClientsDatabase } from '../database/ClientsDatabase'
import { DeleteClientBusiness } from '../business/DeleteClientBusiness'
import { DeleteClienteController } from '../controller/DeleteClientController'
import { AddressDatabase } from '../database/AddressDatabase'

export const deleteClientRouter = express.Router()

const clientsDatabase = new ClientsDatabase()
const addressDatabase = new AddressDatabase()
const deleteClientBusiness = new DeleteClientBusiness(clientsDatabase,addressDatabase)
const deleteClienteController = new DeleteClienteController(deleteClientBusiness)

deleteClientRouter.delete("/delete",deleteClienteController.deleteClient)