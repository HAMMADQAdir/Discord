import { createChats,sendChats,getAllChats,getChats,deleteChats } from "../controller/Chats.controller.js";
import express from "express";

const router = express.Router()

// create Chats
router.post('/createChats',createChats)

// send chat
router.post('/sendChats/:id',sendChats)
// get Chats
router.get('/getChats/:id',getChats)

// get all Chats
router.get('/getAllChats',getAllChats)

// delete Chats
router.delete('/deleteChats/:id',deleteChats)

export default router