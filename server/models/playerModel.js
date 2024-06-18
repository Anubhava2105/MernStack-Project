const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');
const Schema=mongoose.Schema
const playerSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Player',playerSchema);