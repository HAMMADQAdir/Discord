import express from "express";
import mongoose from "mongoose";
import UserRoutes from "./Routes/Users.routes.js";
import cors from 'cors'


const app = express()
app.use(cors());
app.use(express.json())

mongoose.connect("mongodb+srv://aabidhussainpas:7hEzoKNJh96atiwr@cluster0.icak94w.mongodb.net/")
    .then(() => {
        console.log("connected")
        // running the server
        app.listen(5000, () => {
            console.log("5000 port")
        })
    })
    .catch((e) => {
        console.log(e)
    })

app.use("/user",UserRoutes)