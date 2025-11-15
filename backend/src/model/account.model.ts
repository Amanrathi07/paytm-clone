import  mongoose, { model, Schema } from "mongoose";


const accountSchema = new Schema({
    balance : Number ,
    userId  : {
        type: mongoose.Schema.Types.ObjectId ,
        ref : 'User',
        required: true
    }
},{timestamps:true})
 const accountModel = model("Account",accountSchema) ;

 export default accountModel ;