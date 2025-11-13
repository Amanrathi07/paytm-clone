import { Model, Schema } from "mongoose";

const userSchema = new Schema({
    name:{
        type:String ,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        require:true,
        minlength:6,
        select:false
    }
},{timestamps:true});

const userModel = new Model("User",userSchema);

export default userModel ;