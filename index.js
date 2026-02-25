import 'dotenv/config';
import express from "express";

import connectToDB from './utils/db.js';
import userRouter from './routes/user.router.js'

const app = express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.use("/users",userRouter)

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
    connectToDB();
})
