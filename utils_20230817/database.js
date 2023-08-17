import mongoose from "mongoose";

const connectDB = async() =>{
    try{
        await mongoose.connect("mongodb+srv://emocchi39:masatakaP39@cluster0.mqn0zmg.mongodb.net/appDataBase?retryWrites=true&w=majority")
        console.log("Success Connected to MongoDB")
    }catch(err){
        console.log("Failure: Unconnected to MongoDB")
        throw new Error()
    }
}

export default connectDB