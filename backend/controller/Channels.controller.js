import Channels from "../models/Channels.model.js";
import Chats from "../models/Chats.model.js"


export const createChannel = async (user,channelName) => {
    try {

        // Create the channel with the provided request body
        const channel = new Channels();

         // Create a new chat
        const chat = await Chats.create({});
        console.log(chat)

        // Set the admin, mods, and members during creation
        channel.channelName = channelName
        channel.channelAdmin = user._id;  // Admin is the creator 
        channel.channelMembers = [user._id]; // Add the creator to members
        channel.channelChat={chatName:channelName,chat:chat}

        // Save the channel
        await channel.save();

        // Respond with the created channel
        return channel;

    } catch (error) {
        return error.message;
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
