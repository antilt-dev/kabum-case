import express from 'express'
import { ClientsDatabase } from '../database/ClientsDatabase'
import { ShowClientsBusiness } from '../business/ShowClientsBusiness'
import { ShowClientsController } from '../controller/ShowClientsController'

export const showClientsRouter = express.Router()

const clientsDatabase = new ClientsDatabase()
const getAllClientsBusiness = new ShowClientsBusiness(clientsDatabase)
const getClientsController = new ShowClientsController(getAllClientsBusiness)

showClientsRouter.get("/getAll",getClientsController.getAllClients)