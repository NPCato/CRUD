import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './db/conn.js';
import Product from './db/product.model.js';
import productRoutes from './routes/product.route.js'


const PORT = process.env.PORT || 2222;

const app = express();
dotenv.config()


connectDB()
app.use(express.json())


app.use("/api/products",productRoutes);





app.listen(PORT,()=>{
    console.log('edsdsdsdsdsd');
    
})