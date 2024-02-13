const mongoose1= require('mongoose');
const connectDb=async()=>{
    try{
       const connect=await mongoose1.connect("mongodb://localhost:27017/appdb");
       console.log("Connected to MongoDB");
    }
    catch(err)
    {
        console.log(err);
    }

}
module.exports = connectDb; 