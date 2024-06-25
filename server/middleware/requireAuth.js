const jwt=require('jsonwebtoken')
const Admin=require('../models/adminModel')
const requireAuth= async (req,res,next)=>{
    //verify authentication
    const {authorization}=req.headers
    if(!authorization){
        return res.status(401).json({error:"You must be logged in."})
    }
    const token=authorization.split(" ")[1];
    try{
        const {_id}=jwt.verify(token,'process.env.VITE_SECRET')
        req.user=await Admin.findById({_id}).select('_id')
        next()
    }catch(error){
        return res.status(401).json({error:"Invalid token."})
    }
    
}
module.exports=requireAuth;