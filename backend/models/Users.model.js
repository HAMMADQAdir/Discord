import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = mongoose.Schema(

    {
        email: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        displayName: {
            type: String,
            required: true

        },
        gender: {
            type: String,
            required: true
        },
        DOB: {
            type: String,
            required: true
        },
        servers: {
            type: Schema.Types.ObjectId, // Assuming this is referencing the Server model by its ObjectId
            ref: 'Server',                // Referencing the 'Server' model
            required: true               // Ensures the field is mandatory
        },
        friends: {
            type: Schema.Types.ObjectId, // Assuming this is referencing the Users model by its ObjectId
            ref: 'Users',                // Referencing the 'Users' model
            required: true               // Ensures the field is mandatory
        }


    },


    {
        timestamp: true
    }
)

const User = mongoose.model("User", UserSchema)

export default User