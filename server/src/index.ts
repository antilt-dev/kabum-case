import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { signupRouter } from './routes/SignupRouter';
import { loginRouter } from './routes/LoginRouter';
import { showClientsRouter } from './routes/ShowClientsRouter';
import { showAdminsRouter } from './routes/ShowAdminsRouter';
import { deleteClientRouter } from './routes/DeleteClientRouter';



dotenv.config()
const app = express()

const port = process.env.PORT  || 3003

app.use(express.json())
app.use(cors())


app.use('/signup',signupRouter)
app.use('/login',loginRouter)
app.use('/clients',showClientsRouter)
app.use('/clients',deleteClientRouter)
app.use('/admins',showAdminsRouter)




app.listen(port, () => {
    console.log(`The server is running in http://localhost:${port}`)
})