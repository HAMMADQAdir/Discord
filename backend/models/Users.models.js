import mongoose from "mongoose";

const UserSchema = mongoose.Schema(

    {
        email:{
            type:String,
            required:true
        },
        username:{
            type:String,
            required:true
        },
        displayName:{
            type:String,
            required:true

        },
        gender:{
            type:String,
            required:true
        },
        DOB:{
            type:String,
            required:true
        },


    },


    {
        timestamp:true
    }
)

const User = mongoose.model("User",UserSchema)

export default User