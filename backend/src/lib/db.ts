import mongoose from "mongoose";

export default async function db_Connect(url:string):Promise<void>{
    try {
        await mongoose.connect(url);
    } catch (error) {
        console.log("error while connecting mongoDB :" , error);
    }
}