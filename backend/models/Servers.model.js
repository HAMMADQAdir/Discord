import mongoose, { Schema } from "mongoose";

const ServerScema = new Schema({
    serverName : { type: String, required: true },
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
            type:Schema.Types.ObjectId,
            ref:'Channels'
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