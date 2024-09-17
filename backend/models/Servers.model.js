import mongoose, { Schema } from "mongoose";

const ServerScema = new Schema({
    serverName : { type: String },
    serverIcon:{ type: Buffer },
    serverJoiningCode: { type: String },
    serverAdmin: {
        type: Schema.Types.ObjectId, // Assuming this is referencing the Users model by its ObjectId
        ref: 'Users',                // Referencing the 'Users' model
        required: true               // Ensures the field is mandatory
    },
    serverMods: [{
        type: Schema.Types.ObjectId, // Assuming this is referencing the Users model by its ObjectId
        ref: 'Users',                // Referencing the 'Users' model
        required: true               // Ensures the field is mandatory
    }],
    
    serverMembers: [
        {
            type: Schema.Types.ObjectId, // Assuming this is referencing the Users model by its ObjectId
            ref: 'Users',                // Referencing the 'Users' model
            required: true
        }         // Ensures the field is mandatory}
    ],
    serverChannels:[
        {
            channelName: { type: String, required: true },
            
            channelChat:
            {
                chatName: String,
                chat: {
                    type: Schema.Types.ObjectId, // Assuming this is referencing the Users model by its ObjectId
                    ref: 'Users',                // Referencing the 'Users' model
                    required: true               // Ensures the field is mandatory
                }
            },
        }
    ]
}
    ,
    {
        timestamps: true
    }
);

const Server = mongoose.model("Server", ServerScema)

export default Server