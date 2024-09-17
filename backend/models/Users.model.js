import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = mongoose.Schema(

    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        displayName: {
            type: String,

        },
        gender: {
            type: String,
            required: true
        },
        DOB: {
            type: String,
            required: true
        },
        servers:[{
            type: Schema.Types.ObjectId, // Assuming this is referencing the Server model by its ObjectId
            ref: 'Server', 
        }],
        friends: [{
            type: Schema.Types.ObjectId, // Assuming this is referencing the Users model by its ObjectId
            ref: 'Users', 
        }]


    },


    {
        timestamp: true
    }
)

const User = mongoose.model("User", UserSchema)

export default User