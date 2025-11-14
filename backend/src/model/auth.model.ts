import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name:{
        type:String ,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        select:false
    }
},{timestamps:true});

const userModel = model("User",userSchema);

export default userModel ;