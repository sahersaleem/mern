


import mongoose from "mongoose";

import DB_NAME from "./constant.js"
import express from "express";
const app = express()

import dotenv from "dotenv"


dotenv.config({
    path:'./env'
})

;(async()=>{

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("Error",(error)=>{
            console.log("Error",error)
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening at ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error",error)
        throw error
    }
})()


