import { createUserAndServer,getAllUser,getUserWithEmail,getUser,deleteUser } from "../controller/Users.controller.js";
import express from "express";

const router = express.Router()

// create User
router.post('/createUser', createUserAndServer)

// get user
router.get('/getUser/:username',getUser)

// get user
router.get('/getUserWithEmail/:email',getUserWithEmail)

// get all user
router.get('/getAllUser',getAllUser)

// delete user
router.delete('/deleteUser/:id',deleteUser)

export default router