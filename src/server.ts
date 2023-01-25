import express, { Application } from "express"
import dataSource from "./config/config"
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 5000 
const app: Application = express()

dataSource
    .initialize()
    .then((): void => console.log('Connected'))
    .catch((err: unknown): void => console.log(err))
app.listen(PORT, ():void => {
    console.log(`App started ${PORT}`);
})