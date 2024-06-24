const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');
const validator=require('validator')
const Schema=mongoose.Schema
const adminSchema=new Schema({
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

//static signup method
adminSchema.statics.signup=async function(username,email,password,age,gender){
    //validation
    if(!username || !email || !password || !age || !gender){
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Invalid email')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Weak Password')
    }
    const exists=await this.findOne({username})
    if(exists){
        throw Error('Username already exists')
    }
    const salt=await bcrypt.genSalt(10)
    const hash=await bcrypt.hash(password,salt)

    const admin=await this.create({username,email,password:hash,age,gender})

    return admin;
}

module.exports=mongoose.model('Admin',adminSchema);
