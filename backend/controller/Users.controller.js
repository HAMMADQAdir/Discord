import User from "../models/Users.model.js";
import Server from "../models/Servers.model.js";
import { createChannel } from "./Channels.controller.js";
import {generateJoiningCode} from "./Servers.controller.js"

export const createUserAndServer = async (req, res) => {
    try {
        // Step 1: Create User
        const user = await User.create(req.body); // Assume req.body.user contains user data
        if (!user) {
            return res.status(400).json({ message: "User creation failed" });
        }

        // Step 2: Create Server linked to the user
        const server = new Server({}); // Assume req.body.server contains server data

        const channel = await createChannel(user, user.username); // Create a default channel for the server
        const joiningCode = generateJoiningCode();

        // Set server details with user reference
        server.serverName = user.username; // Optionally set server name based on the user
        server.serverJoiningCode = joiningCode;
        server.serverAdmin = user._id; // Admin is the user
        server.serverMods = [user._id]; // Add the user as a mod
        server.serverMembers = [user._id]; // Add the user as a member
        server.serverChannels = [channel]; // Add the created channel

        // Save the server
        await server.save();

        // Step 3: Update user with server reference (optional, if you want to store server info in user)
        user.servers = server._id; 
        await user.save();

        // Step 4: Return the created user and server data
        return res.status(201).json({ user, server });

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

// get User 
export const getUser = async (req,res)=>{
    try {
        const {username} = req.params
        const user = await User.findOne({username:username})

        if(!user){
           return res.status(400).json({message:"User not found"})
        }

        return res.json(user)
    } catch (error) {
        res.status(400).json({message:error.message})
    }


}

export const getUserWithEmail = async (req,res)=>{
    try {
        const {email} = req.params
        const user = await User.findOne({email:email})

        if(!user){
            res.status(400).json({message:"User not found"})
        }

        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({message:error.message})
    }


}



// get all user
export const getAllUser = async (req,res) =>{
    try{
        const user =await User.find({})

        if(!user){
            res.status(400).json({message:"User not found"})
        }

        res.status(200).json(user)
    }
    catch(e){
        res.status(400).json({message:e.message})
    }
}


export const deleteUser = async (res,req)=>{
    try{
        // get id of the user 
        const {id} = req.params
        const user = await User.findByIdAndDelete(id)

        if(!user){
            res.status(400).json({message:"User not found"})
        }

        res.status(200).json({message:"User deleted succesfully"})
    }
    catch(e){
        res.status(400).json({message:e.message})

    }

}