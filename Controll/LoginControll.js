const express=require("express")
const POSTloginRouter=express.Router();
const bcrypt=require("bcrypt")
const jwt=require('jsonwebtoken')
const {userModal} = require('../Models/usersModal')




const LoginValidate =(userData)=>{
    const user = joi.object({
        Email:joi.string().required(),
        Password:joi.string().required().min(3)
    })
    return user.validate(userData)
}

POSTloginRouter.post("/", async(req,res)=>{
    try {
        const {error}=LoginValidate(req.body)
if(error)return res.json(error.message)
const UserEmail=await userModal.findOne({Email:req.body.Email})
if(!UserEmail) return res.json("Email Not Fonud")

const checkpaas=await bcrypt.compare(req.body.Password,UserEmail.Password)
if(!checkpaas) return res.json("incorect Emali or Password")

const token = jwt.sign({id:UserEmail._id,name:UserEmail.Email},
    process.env.SECRET_KEY)
res.json({login:'successfull',token:token})
    } catch (error) {
        console.log(error.message)
    }

})
module.exports =POSTloginRouter