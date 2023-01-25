import express, { Application } from "express"
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 5000 
const app: Application = express()

app.listen(PORT, ():void => {
    console.log(`App started ${PORT}`);
})