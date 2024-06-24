const mongoose=require('mongoose')
const {Schema}=mongoose
const gameSchema=new Schema({
    name:{
        type: String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true
    },
    release:{
        type:Date,
        required:true
    },
    publisher:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    info:{
        type:String,
        required:true
    },    
},{timestamps:true})

const Game=mongoose.model('Game',gameSchema);
module.exports=Game;
