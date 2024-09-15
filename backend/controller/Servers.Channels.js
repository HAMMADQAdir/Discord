
import Server from "../models/Servers.model.js";
import User from "../models/Users.model.js";
import { createChannel } from "./Channels.controller.js";
import crypto from 'crypto'

// Function to generate a unique joining code
const generateJoiningCode =  () => {
    let code;

    // Loop until a unique code is generated
    
        // Generate a random alphanumeric code of 8 characters
        code = crypto.randomBytes(4).toString('hex').toUpperCase(); // Generates 8 characters, e.g., "A1B2C3D4"

    return code;
};


export const createServer = async (req, res) => {
    try {
        const { userID } = req.params;

        // Check if the user exists
        const user = await User.findById(userID);
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        // Create the server with the provided request body
        const server = new Server(req.body);

        const channel = await createChannel(user,user.username)
        console.log(channel)

        const joiningCode = generateJoiningCode()

        // Set the admin, mods, and members during creation
        server.serverName= user.username
        server.serverJoiningCode=joiningCode
        server.serverAdmin = user._id;  // Admin is the creator
        server.serverMods = [user._id]; // Add the creator to mods
        server.serverMembers = [user._id]; // Add the creator to members
        server.serverChannels = [channel]
        

        // Save the server
        await server.save();

        // Respond with the created server
        return res.status(201).json(server);

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

// get server 
export const getServer = async (req,res)=>{
    try {
        const {id} = req.params
        const server = await Server.findById(id)

        if(!server){
            res.status(400).json({message:"User not found"})
            
        }
        else{

            res.status(200).json(server)
        }
    } catch (error) {
        res.status(400).json({message:error.message})
    }

}

export const joinServerUsingCode = async (req, res) => {
    try {
        const { joiningCode, userID } = req.params; // Combined destructuring
        const server = await Server.findOne({ serverJoiningCode: joiningCode });

        // Check if the channel exists
        if (!server) {
            return res.status(400).json({ message: "Please enter correct joining code." });
        }

        
        // Add the user to the server members list if they're not already added
        if (!server.serverMembers.includes(userID)) {
            await server.updateOne({ $push: { serverMembers: userID } }); // Push the user ID to serverMembers
        } else {
            return res.status(400).json({ message: "User is already a member of this server." });
        }

        // Send success response
        return res.status(200).json({ message: "User successfully joined the server." });

    } catch (error) {
        // Handle errors
        return res.status(400).json({ message: error.message });
    }
};


//Promote user to MOD
export const promoteUserToMOD = async (req, res) => {
    try {
        const { serverID, adminID, userID } = req.params;

        // Find the user and server
        const server = await Server.findById(serverID);

        // Check if the server exists
        if (!server) {
            return res.status(400).json({ message: "server not found." });
        }

        // Check if the user exists
        if (!userID) {
            return res.status(400).json({ message: "User not found." });
        }

        // Check if the user is a member of the server
        if (!server.serverMembers.includes(userID)) {
            return res.status(400).json({ message: "User is not a member of this server." });
        }

        // Check if the requesting user is the server admin
        if (adminID !== String(server.serverAdmin._id)) {
            return res.status(403).json({ message: "You are not authorized to promote users to MOD." });
        }

        // Check if the user is already a MOD
        if (server.serverMods.includes(userID)) {
            return res.status(400).json({ message: "User is already a MOD." });
        }

        // Promote the user to MOD
        await server.updateOne({ $push: { serverMods: userID } });

        // Send success response
        return res.status(200).json({ message: "User successfully promoted to MOD." });

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const initiateChannel = async (req, res) => {
    try {
        const { serverID, userID,channelName } = req.params;
        
        // check whther user exist or not 
        const user = await User.findById(userID)
        if(!user){
            return res.status(404).json({ message: "User not found." });

        }

        // Check if the server exists
        const server = await Server.findById(serverID);
        if (!server) {
            return res.status(404).json({ message: "server not found." });
        }

        // Check if the user is a MOD or the admin of the server
        if (server.serverMods.includes(userID) || server.serverAdmin == userID) {
            // Create a new chat
            const channel = await createChannel(user,channelName);
            
            if (!channel) {
                return res.status(500).json({ message: "Failed to create channel." });
            }

           

            // Update the server to include the new chat
            await server.updateOne({ 
                $push: { 
                    serverChannels: channel
                } 
            });

            return res.status(200).json({ message: "Channel initiated successfully." });

        } else {
            // If the user is not authorized (neither MOD nor admin)
            return res.status(403).json({ message: "You do not have permission to initiate a chat in this server." });
        }

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


// Delete server
export const deleteServer = async (req, res) => {
    try {
        // get id of the user 
        const { id } = req.params
        const server = await Server.findByIdAndDelete(id)

        if (!server) {
            res.status(400).json({ message: "servers not found" })
        }

        res.status(200).json({ message: "servers deleted succesfully" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}
