import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { loginRouter } from './routes/LoginRouter';
import { showClientsRouter } from './routes/ShowClientsRouter';
import { deleteClientRouter } from './routes/DeleteClientRouter';
import { createAddressRouter } from './routes/CreateAddressRouter';
import { clientDetailRouter } from './routes/ClientDetailRouter';
import { deleteAddressRouter } from './routes/DeleteAddressRouter';
import { updateClientRouter } from './routes/UpdateClientRouter';
import { tokenValidationRouter } from './routes/TokenValidationRouter';
import { updateAddressRouter } from './routes/UpdateAddressRouter';
import { getAddressesRouter } from './routes/GetAddressesRouter';
import { createClientRouter } from './routes/CreateClientRouter';


dotenv.config()
const app = express()

const port = process.env.PORT  || 3003

app.use(express.json())
app.use(cors())

app.use('/token-validation',tokenValidationRouter)
app.use('/login',loginRouter)
app.use('/clients',showClientsRouter)
app.use('/clients',deleteClientRouter)
app.use('/clients',clientDetailRouter)
app.use('/clients',updateClientRouter)
app.use('/clients',createClientRouter)
app.use('/clients/address',createAddressRouter)
app.use('/clients/address',deleteAddressRouter)
app.use('/clients/address',updateAddressRouter)
app.use('/clients/address',getAddressesRouter)




app.listen(port, () => {
    console.log(`The server is running in http://localhost:${port}`)
})