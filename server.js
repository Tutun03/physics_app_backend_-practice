const express= require('express');
const connectDb=require('./config/db');
const app= express();
connectDb();

app.use(express.json());
 app.use("/main/route1",require('./route/R1'));

 app.listen(400,()=>{
     console.log("Server is running on port 400");
 })