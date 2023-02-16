import express from 'express'

import { ClientsDatabase } from '../database/ClientsDatabase'
import { ClientDetailBusiness } from '../business/ClientDetailBusiness'
import { ClientDetailController } from '../controller/ClienteDetailController'
import { AddressDatabase } from '../database/AddressDatabase'

export const clientDetailRouter = express.Router()

const clientsDatabase = new ClientsDatabase()
const addressDatabase = new AddressDatabase()
const clientDetailBusiness = new ClientDetailBusiness(clientsDatabase,addressDatabase)
const clientDetailController = new ClientDetailController(clientDetailBusiness)

clientDetailRouter.get('/detail/:cpf',clientDetailController.getClient)