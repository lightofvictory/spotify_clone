import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongobd.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoute.js';
// const dem=require('dotenv').config();

// App config
const app=express();
const port=process.env.PORT || 2000;
connectDB();
connectCloudinary();

// middleware
app.use(express.json());
app.use(cors());

//initialewares
app.get('/',(req,res)=>res.send('apiWorking'));
app.listen(port,()=>console.log(`sever started on ${port}`));

// routers
app.use("/api/song",songRouter);
app.use("/api/album/",albumRouter);
