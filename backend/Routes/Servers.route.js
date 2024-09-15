import express from 'express'
import { createServer,initiateChannel,deleteServer,promoteUserToMOD,getServer,joinServerUsingCode } from '../controller/Servers.Channels.js'

const router = express.Router()

// create channel
router.post('/createServer/:userID',createServer)

// get channel
router.get('/getServer/:id',getServer)

// join channel
router.post('/joinServer/:userID/:joiningCode',joinServerUsingCode)

// initiate chat group
router.post('/initiateChannel/:serverID/:userID/:channelName',initiateChannel)

// promote uer
router.post('/promoteUser/:serverID/:adminID/:userID',promoteUserToMOD)

// delter channels
router.delete('/deleteServer/:id',deleteServer)

export default router