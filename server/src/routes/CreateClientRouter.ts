import express from 'express'
import { ClientsDatabase } from '../database/ClientsDatabase'
import { CreateClientBusiness } from '../business/CreateClientBusiness'
import { CreateClientController } from '../controller/CreateClientController'

export const createClientRouter = express.Router()

const clientsDatabase = new ClientsDatabase()
const createClientBusiness = new CreateClientBusiness(clientsDatabase)
const createClientController = new CreateClientController(createClientBusiness)

createClientRouter.post('/create',createClientController.createClient)