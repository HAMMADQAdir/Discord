import { createChannel,deleteChannel,joinChannelUsingCode,promoteUserToMOD,initiateChat,getChannel } from "../controller/Channels.controller.js";
import express from "express";

const router = express.Router()

// create channel
router.post('/createChannel/:userID',createChannel)

// get channel
router.get('/getChannel/:id',getChannel)
// join channel
router.post('/joinChannel/:userID/:joiningCode',joinChannelUsingCode)

// initiate chat group
router.post('/initiateChat/:channelID/:userID/:chatName',initiateChat)

// promote uer
router.post('/promoteUser/:channelID/:adminID/:userID',promoteUserToMOD)

// delter channels
router.delete('/deleteChannel/:id',deleteChannel)

export default router