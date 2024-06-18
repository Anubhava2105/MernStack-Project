const express=require('express')
const {createGame,getGame,getSingleGame,deleteGame,updateGame}=require('../controller/gameController.js')
const router=express.Router()

//get all games
router.get('/',getGame)
//get single game
router.get('/:id',getSingleGame)
//post about new game
router.post('/', createGame)
//delete
router.delete('/:id',deleteGame)
//update
router.patch('/:id',updateGame)





module.exports=router;