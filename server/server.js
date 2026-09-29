import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res)=> res.send("working"))

app.listen(PORT, ()=> console.log("Server is running"))