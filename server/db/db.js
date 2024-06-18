const {MongoClient}=require('mongodb');
let dbConnection

// module.exports={
//     connecttoDb:(cb)=>{
//         MongoClient.connect('mongodb://localhost:27017/gameStore')
//         .then((client)=>{
//             dbConnection=client.db()
//             return cb()
//         })
//         .catch(err =>{
//             console.log(err)
//             return cb(err)
//         })
//     },
//     getDb:()=> dbConnection
// }