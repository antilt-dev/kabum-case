import express from 'express'

import { AddressDatabase } from '../database/AddressDatabase'
import { CreateAddressBusiness } from '../business/CreateAddressBusiness'
import { CreateAddressController } from '../controller/CreateAddressController'

export const createAddressRouter = express.Router()

const addressDatabase = new AddressDatabase()
const createAddressBusiness = new CreateAddressBusiness(addressDatabase)
const createAddressController = new CreateAddressController(createAddressBusiness)

createAddressRouter.post("/create",createAddressController.createAddress)