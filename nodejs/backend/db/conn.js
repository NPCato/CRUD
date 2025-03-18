import mongoose from "mongoose"

export const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.db);
        console.log(`db connected successfully ${process.env.db}`);
        
        
    } catch (error) {
        console.error(error);   
        process.exit(1);
    }
}