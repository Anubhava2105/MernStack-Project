const Game=require('../models/games.js')
const mongoose=require('mongoose')

//get all games' info
const getGame = async(req,res)=>{
    const games=await Game.find({}).sort({release:-1})
    res.status(200).json(games)
}

//get a single game's info
const getSingleGame=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }
    const singleGame=await Game.findById(id)
    if(!singleGame){
        return res.status(404).json({error:'No such workout'})
    }
    res.status(200).json(singleGame)
}

//add new game info
const createGame = async (req,res)=>{
    const {name,price,release,publisher,quantity,genre,rating,info}= req.body
    try{
        const game= await Game.create({name,price,release,publisher,quantity,genre,rating,info})
        res.status(200).json(game)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}
//delete game info
const deleteGame = async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }
    const deleteGame= await Game.findOneAndDeleteById(id)
    if(!deleteGame){
        return res.status(400).json({error:'Couldn\'t delete'})
    }
    res.status(200).json(deleteGame)
}
//update game info
const updateGame  =async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }
    const updateGame=await Game .findOneAndUpdate({_id:id},{...req.body})
    if(!updateGame){
        return res.status(400).json({error:'Couldn\'t delete'})
    }
    res.status(200).json(updateGame)
}



module.exports={createGame,getGame,getSingleGame,deleteGame,updateGame}