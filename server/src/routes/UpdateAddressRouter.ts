import express from 'express'
import { AddressDatabase } from '../database/AddressDatabase'
import { UpdateAddressBusiness } from '../business/UpdateAddressBusiness'
import { UpdateAddressController } from '../controller/UpdateAddressController'

export const updateAddressRouter = express.Router();

const addressDatabase = new AddressDatabase()
const updateAddressBusiness = new UpdateAddressBusiness(addressDatabase)
const updateAddressController = new UpdateAddressController(updateAddressBusiness)

updateAddressRouter.put('/update/:id',updateAddressController.updateAddress)