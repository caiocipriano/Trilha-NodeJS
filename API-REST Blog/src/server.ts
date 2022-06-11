import express  from 'express'
import { router } from './routes'
const app = express()

app.use(express.json())
app.use(router)


//Rodando Servidor
app.listen(8080,()=>{
    console.log("Rodando na porta 8080...")
})