import express from 'express'
import { ClientsDatabase } from '../database/ClientsDatabase'
import { GetClientsBusiness } from '../business/GetClientsBusiness'
import { GetClientsController } from '../controller/GetClientsController'

export const getAllClientsRouter = express.Router()

const clientsDatabase = new ClientsDatabase()
const getClientsBusiness = new GetClientsBusiness(clientsDatabase)
const getClientsController = new GetClientsController(getClientsBusiness)

getAllClientsRouter.get("/getAll",getClientsController.getAllClients)