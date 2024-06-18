const Admin=require('../models/adminModel')


//login
const loginAdmin= async (req,res)=>{
    res.json({mssg:'login admin'})
}





//signup
const signupAdmin= async (req,res)=>{
    const {username,password}=req.body
    try{
        const admin=await Admin.signup(username,password)
        res.status(200).json({username, admin})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports={loginAdmin,signupAdmin}