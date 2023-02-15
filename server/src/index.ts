import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { loginRouter } from './routes/LoginRouter';
import { showClientsRouter } from './routes/ShowClientsRouter';
import { deleteClientRouter } from './routes/DeleteClientRouter';
import { createAddressRouter } from './routes/CreateAddressRouter';
import { clientDetailRouter } from './routes/ClientDetailRouter';
import { deleteAddressRouter } from './routes/DeleteAddressRouter';



dotenv.config()
const app = express()

const port = process.env.PORT  || 3003

app.use(express.json())
app.use(cors())


app.use('/login',loginRouter)
app.use('/clients',showClientsRouter)
app.use('/clients',deleteClientRouter)
app.use('/clients',clientDetailRouter)
app.use('/clients/address',createAddressRouter)
app.use('/clients/address',deleteAddressRouter)




app.listen(port, () => {
    console.log(`The server is running in http://localhost:${port}`)
})