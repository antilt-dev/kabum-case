import express from 'express';
import { AddressDatabase } from '../database/AddressDatabase';
import { DeleteAddressBusiness } from '../business/DeleteAddressBusiness';
import { DeleteAddressController } from '../controller/DeleteAddressController';

export const deleteAddressRouter = express.Router();

const addressDatabase = new AddressDatabase();
const deleteAddressBusiness = new DeleteAddressBusiness(addressDatabase);
const deleteAddressController = new DeleteAddressController(deleteAddressBusiness);

deleteAddressRouter.delete('/:id', deleteAddressController.deleteAddress);