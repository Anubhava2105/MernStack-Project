const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');
const Schema=mongoose.Schema
const adminSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

//static signup method
adminSchema.statics.signup=async function(username,password){
    const exists=await this.findOne({username})
    if(exists){
        throw Error('Username already exists')
    }
    const salt=await bcrypt.genSalt(10)
    const hash=await bcrypt.hash(password,salt)

    const admin=await this.create({username,password:hash})

    return admin;
}

module.exports=mongoose.model('Admin',adminSchema);
