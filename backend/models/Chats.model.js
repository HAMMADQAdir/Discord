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

    users:[
        {
            type: Schema.Types.ObjectId, // Assuming this is referencing the Users model by its ObjectId
            ref: 'Users',                // Referencing the 'Users' model
            required: true               // Ensures the field is mandatory
        }
    ]
    // other fields if needed...
});
const Chats = mongoose.model("Chat",chatSchema)

export default Chats;