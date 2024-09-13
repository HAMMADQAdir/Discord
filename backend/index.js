import express from "express";
import mongoose from "mongoose";
import UserRoutes from "./Routes/Users.routes.js";
import cors from 'cors'
import ChatsRoutes from "./Routes/Chats.routes.js"
import { Server as SocketServer } from "socket.io";
import http from 'http'
import ChannelRoutes from "./Routes/Channels.routes.js"


const app = express()
app.use(cors());
app.use(express.json())

// Create HTTP server
const server = http.createServer(app);


// Integrate Socket.IO with HTTP server
const io = new SocketServer(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});



io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle receiving messages
    socket.on('sendMessage', (message) => {
        io.emit('receiveMessage', message); // Broadcast the message to all clients
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

mongoose.connect("mongodb+srv://aabidhussainpas:7hEzoKNJh96atiwr@cluster0.icak94w.mongodb.net/")
    .then(() => {
        console.log("connected")
        // running the server
        server.listen(5000, () => {
            console.log("5000 port")
        })
    })
    .catch((e) => {
        console.log(e)
    })

app.use("/api/users", UserRoutes)
app.use("/api/chats", ChatsRoutes)
app.use("/api/channels",ChannelRoutes)