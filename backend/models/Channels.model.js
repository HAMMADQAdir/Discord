import mongoose from "mongoose";
import { Schema } from "mongoose";




const ChannelSchema = new mongoose.Schema(
    {
        channelName: { type: String, required: true },
        channelIcon: { type: Buffer},
        channelJoiningCode: { type: String },
        channelAdmin: {
            type: Schema.Types.ObjectId, // Assuming this is referencing the Users model by its ObjectId
            ref: 'Users',                // Referencing the 'Users' model
            required: true               // Ensures the field is mandatory
        },
        channelMods: [{
            type: Schema.Types.ObjectId, // Assuming this is referencing the Users model by its ObjectId
            ref: 'Users',                // Referencing the 'Users' model
            required: true               // Ensures the field is mandatory
        }],
        channelChats: [
            {
                chatName: String,
                chat: {
                    type: Schema.Types.ObjectId, // Assuming this is referencing the Users model by its ObjectId
                    ref: 'Users',                // Referencing the 'Users' model
                    required: true               // Ensures the field is mandatory
                }
            }],
        channelMembers: [
            {
                type: Schema.Types.ObjectId, // Assuming this is referencing the Users model by its ObjectId
                ref: 'Users',                // Referencing the 'Users' model
                required: true
            }         // Ensures the field is mandatory}
        ],
    }
)
const Channels = mongoose.model("Channels", ChannelSchema)

export default Channels;