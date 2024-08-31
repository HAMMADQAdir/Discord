import mongoose from "mongoose";
import { Schema } from "mongoose";

const messageSchema = new Schema({ 
        username: String,
        message: String
 
},{
    timestamps:true
}

);
const chatSchema = new mongoose.Schema({
    messages: [messageSchema],
    // other fields if needed...
});
const Chats = mongoose.model("Chat",chatSchema)

export default Chats;