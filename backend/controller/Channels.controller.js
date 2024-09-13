import Channels from "../models/Channels.model.js";
import User from "../models/Users.model.js";
import Chats from "../models/Chats.model.js"
import crypto from 'crypto';


// Function to generate a unique joining code
const generateJoiningCode =  () => {
    let code;

    // Loop until a unique code is generated
    
        // Generate a random alphanumeric code of 8 characters
        code = crypto.randomBytes(4).toString('hex').toUpperCase(); // Generates 8 characters, e.g., "A1B2C3D4"

       

  

    return code;
};


export const createChannel = async (req, res) => {
    try {
        const { userID } = req.params;

        // Check if the user exists
        const user = await User.findById(userID);
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        // Create the channel with the provided request body
        const channel = new Channels(req.body);

        const joiningCode = generateJoiningCode()

        // Set the admin, mods, and members during creation
        channel.channelAdmin = user._id;  // Admin is the creator
        channel.channelMods = [user._id]; // Add the creator to mods
        channel.channelMembers = [user._id]; // Add the creator to members
        console.log(joiningCode)
        channel.channelJoiningCode=joiningCode

        // Save the channel
        await channel.save();

        // Respond with the created channel
        return res.status(201).json(channel);

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

// get User 
export const getChannel = async (req,res)=>{
    try {
        const {id} = req.params
        const channel = await Channels.findById(id)

        if(!channel){
            res.status(400).json({message:"User not found"})
            
        }
        else{

            res.status(200).json(channel)
        }

    } catch (error) {
        res.status(400).json({message:error.message})
    }


}


export const joinChannelUsingCode = async (req, res) => {
    try {
        const { joiningCode, userID } = req.params; // Combined destructuring
        const channel = await Channels.findOne({ channelJoiningCode: joiningCode });

        // Check if the channel exists
        if (!channel) {
            return res.status(400).json({ message: "Please enter correct joining code." });
        }

        
        // Add the user to the channel members list if they're not already added
        if (!channel.channelMembers.includes(userID)) {
            await channel.updateOne({ $push: { channelMembers: userID } }); // Push the user ID to channelMembers
        } else {
            return res.status(400).json({ message: "User is already a member of this channel." });
        }

        // Send success response
        return res.status(200).json({ message: "User successfully joined the channel." });

    } catch (error) {
        // Handle errors
        return res.status(400).json({ message: error.message });
    }
};

export const initiateChat = async (req, res) => {
    try {
        const { channelID, userID,chatName } = req.params;


        // Check if the channel exists
        const channel = await Channels.findById(channelID);
        if (!channel) {
            return res.status(404).json({ message: "Channel not found." });
        }

        // Check if the user is a MOD or the admin of the channel
        if (channel.channelMods.includes(userID) || channel.channelAdmin == userID) {
            // Create a new chat
            const chat = await Chats.create({});
            
            if (!chat) {
                return res.status(500).json({ message: "Failed to create chat." });
            }

            // Add channel members to the chat
            if (channel.channelMembers && channel.channelMembers.length > 0) {
                await chat.updateOne({ $push: { users: channel.channelMembers } });
            }

            // Update the channel to include the new chat
            await channel.updateOne({ 
                $push: { 
                    channelChats: { 
                        chatName: chatName || "Unnamed Channel",  // Fallback if channelName is missing
                        chat: chat 
                    } 
                } 
            });

            return res.status(200).json({ message: "Chat initiated successfully." });

        } else {
            // If the user is not authorized (neither MOD nor admin)
            return res.status(403).json({ message: "You do not have permission to initiate a chat in this channel." });
        }

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//Promote user to MOD
export const promoteUserToMOD = async (req, res) => {
    try {
        const { channelID, adminID, userID } = req.params;

        // Find the user and channel
        const channel = await Channels.findById(channelID);

        // Check if the channel exists
        if (!channel) {
            return res.status(400).json({ message: "Channel not found." });
        }

        // Check if the user exists
        if (!userID) {
            return res.status(400).json({ message: "User not found." });
        }

        // Check if the user is a member of the channel
        if (!channel.channelMembers.includes(userID)) {
            return res.status(400).json({ message: "User is not a member of this channel." });
        }

        // Check if the requesting user is the channel admin
        if (adminID !== String(channel.channelAdmin._id)) {
            return res.status(403).json({ message: "You are not authorized to promote users to MOD." });
        }

        // Check if the user is already a MOD
        if (channel.channelMods.includes(userID)) {
            return res.status(400).json({ message: "User is already a MOD." });
        }

        // Promote the user to MOD
        await channel.updateOne({ $push: { channelMods: userID } });

        // Send success response
        return res.status(200).json({ message: "User successfully promoted to MOD." });

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};


// Delete Channel
export const deleteChannel = async (req, res) => {
    try {
        // get id of the user 
        const { id } = req.params
        const channel = await Channels.findByIdAndDelete(id)

        if (!channel) {
            res.status(400).json({ message: "Channels not found" })
        }

        res.status(200).json({ message: "Channels deleted succesfully" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}
