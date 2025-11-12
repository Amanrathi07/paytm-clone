import mongoose from "mongoose" ;

export async function db_connec(url:string):Promise<void>{
    try {
       await mongoose.connect(url);
       console.log("connected to db ");
    } catch (error) {
        console.log("can't connect to mongodb ",error)
    }
}