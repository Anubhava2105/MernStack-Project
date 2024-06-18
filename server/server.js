require('dotenv').config()
const express = require("express");
const mongoose=require('mongoose');
const records=require('./routes/record.js')
const admin=require('./routes/admin.js')
const PORT = process.env.PORT || 5050;
const app = express();
app.use(express.json());
app.use('/api/games',records);
app.use('/api/admin',admin);
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
//db connection
mongoose.connect('mongodb://localhost:27017/gameStore')
.then(()=>{
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
      });
})
.catch((error)=>{
    console.log(error)
})

// app.get("/games", (req, res) => {
//     const page=req.query.p || 0;
//     const gamesperPage=5;
//     let games = [];
//     db.collection("games")
//     .find()
//     .sort({ name: 1 })
//     .skip(page * gamesperPage)
//     .limit(gamesperPage)
//     .forEach((game) => games.push(game))
//     .then(() => {
//       res.status(200).json(games);
//     })
//     .catch(() => {
//       res.status(500).json({ msg: "could not fetch documents" });
//     });
// });

// app.get('/games/:id',(req,res)=>{

//     if(ObjectId.isValid(req.params.id)){
//         db.collection('games').findOne({_id: new ObjectId(req.params.id)})
//         .then((doc)=>{
//         res.status(200).json(doc);
//         })
//         .catch(()=>{
//         res.status(500).json({ msg: "could not fetch the document"})
//         }) 
//     }
//     else{
//         res.status(500).json({error:'Not a valid Document ID'})
//     }
    
// })

// app.post('/games',(req,res)=>{
//     const game=req.body;
//     db.collection('games').insertOne(game)
//     .then((result)=>{
//         res.status(200).json(result)
//     })
//     .catch((err)=>{
//         res.status(500).json({err:"could not create a new document"})
//     })
// })

// app.delete('/games/:id',(req,res)=>{
//     if(ObjectId.isValid(req.params.id)){
//         db.collection('games').deleteOne({_id: new ObjectId(req.params.id)})
//         .then((result)=>{
//             res.status(200).json(result)
//         })
//         .catch((err)=>{
//             res.status(500).json({err:"could not delete the document"})
//         })
//     }
//     else{
//         res.status(500).json({err:"Not a valid Doc ID"})
//     }
// })

// app.patch('/games/:id',(req,res)=>{
//     const updates=req.body
//     if(ObjectId.isValid(req.params.id)){
//         db.collection('games').updateOne({_id: new ObjectId(req.params.id)},{$set:updates})
//         .then((result)=>{
//             res.status(200).json(result)
//         })
//         .catch((err)=>{
//             res.status(500).json({err:"could not update the document"})
//         })
//     }
//     else{
//         res.status(500).json({err:"Not a valid Doc ID"})
//     }
// })