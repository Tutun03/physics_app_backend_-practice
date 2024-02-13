const mongoose=require('mongoose');
const Course=require('../model/coursemodel');
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
     courses:{
        type:'ObjectId',
        required:true,
        ref:"Course"
     }
   
})

const User=mongoose.model('User',userSchema);
module.exports={User};