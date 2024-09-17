import Chats from "../models/Chats.model.js";

// Create New Chats
export const createChats =  async(req,res) =>{
    try {
        const chats = await Chats.create(req.body)
        res.status(200).json(chats)
        console.log(chats)
    } catch (error) {
        res.status(400).json({message:e.message})
    }

}

export const  sendChats = async (io,messages)=>{
    try {
        const { chatID, username, message } = messages;
        console.log(message)
        // Save the message to the chat in the database (similar to sendChats logic)
        const updatedChat = await Chats.findByIdAndUpdate(
            chatID,  // Assuming chatId is sent with the message
            { $push: { messages: { username, message: message } } }, // Push the new message
            { new: true }  // Return the updated chat
        );

        if(!updatedChat){
            console.log("Error finding chat")
            return
        }

        
    } catch (error) {
        console.error('Error saving message:', error);
    }
}

// get Chats 
export const getChats = async (req,res)=>{
    try {
        const {id} = req.params
        const chats = await Chats.findById(id)

        if(!chats){
            res.status(400).json({message:"Chats not found"})
        }

        res.status(200).json(chats)
    } catch (error) {
        res.status(400).json({message:error.message})
    }


}



// get all Chats
export const getAllChats = async (req,res) =>{
    try{
        const chats =await Chats.find({})

        if(!chats){
            res.status(400).json({message:"Chats not found"})
        }
        console.log(chats)
        res.status(200).json(chats)
    }
    catch(e){
        res.status(400).json({message:e.message})
    }
}


export const deleteChats = async (res,req)=>{
    try{
        // get id of the Chats 
        const {id} = req.params
        const chats = await Chats.findByIdAndDelete(id)

        if(!chats){
            res.status(400).json({message:"Chats not found"})
        }

        res.status(200).json({message:"Chats deleted succesfully"})
    }
    catch(e){
        res.status(400).json({message:e.message})

    }

}