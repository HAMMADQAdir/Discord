import express from 'express'
import { createServer,initiateChannel,deleteServer,promoteUserToMOD,getServer,joinServerUsingCode } from '../controller/Servers.controller.js'
import { getChannel } from '../controller/Channels.controller.js'

const router = express.Router()

// create channel
router.post('/createServer/:username',createServer)

// get channel
router.get('/getServer/:id',getServer)

router.get('/getChannel/:id',getChannel)

// join channel
router.post('/joinServer/:username/:joiningCode',joinServerUsingCode)

// initiate chat group
router.post('/initiateChannel/:serverID/:userID/:channelName',initiateChannel)

// promote uer
router.post('/promoteUser/:serverID/:adminID/:userID',promoteUserToMOD)

// delter channels
router.delete('/deleteServer/:id',deleteServer)

export default router