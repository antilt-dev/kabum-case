import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { signupRouter } from './routes/SignupRouter';
import { getAllClientsRouter } from './routes/GetClientsRouter';
import { loginRouter } from './routes/LoginRouter';



dotenv.config()
const app = express()

const port = process.env.PORT  || 3003

app.use(express.json())
app.use(cors())


app.use('/signup',signupRouter)
app.use('/clients',getAllClientsRouter)
app.use('/login',loginRouter)



app.listen(port, () => {
    console.log(`The server is running in http://localhost:${port}`)
})