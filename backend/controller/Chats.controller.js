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

export const  sendChats = async (req,res)=>{
    try {
        const {id} = req.params
        const updatedChat = await Chats.findByIdAndUpdate(
            id,
            { $push: { messages: { username: req.body.username, message: req.body.message } } },
            { new: true }  // Return the updated document
        );
        if(!updatedChat){
            res.status(400).json({message:"Chats does not exist"})
        }

        // Respond with the updated chat document
        res.status(200).json(updatedChat);
    } catch (error) {
        console.log(error)
        res.status(400).json({message:error.message})
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