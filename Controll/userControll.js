const express=require("express")
const GETuserRouter=express.Router();
const POSTuserRouter=express.Router();
const DELETEuserRouter=express.Router();
const PUTuserRouter=express.Router();
const {userModal} = require('../Models/usersModal')
const bcrypt=require("bcrypt")
const joi=require("joi")
const UserRegValidate = (userData) =>{
    const user = joi.object({
        name:joi.string().required(),
        Email:joi.string().required(),
        Password:joi.string().required().min(3),
        userStatus:joi.string().required(),
        role:joi.string().required(),
    })
    return user.validate(userData)
}


GETuserRouter.get("/",async (req,res)=>{
try {
    const Allusers = await userModal.find()
    res.json({Allusers})
} catch (error) {
    res.json(error.message)
}
})



POSTuserRouter.post("/", async(req,res)=>{
 try {
    const {error}=UserRegValidate(req.body)
    if(error) return res.json(error.message)
    const newuser = new userModal(req.body)
    const salt = await bcrypt.genSalt(10)
    newuser.Password=await bcrypt.hash(newuser.Password,salt)
  await newuser.save()
  res.send({status:(200),message:"successfully Add"})
 } catch (error) {
    res.status(400).send(error.message)
    console.log(error.message)
 }
})


PUTuserRouter.put('/:id', async (req, res) =>{
    try {
        let {id}=req.params
let updatedData=await userModal.findByIdAndUpdate(id,{
    name:req.body.name,
    Email:req.body.Email,
    Password:req.body.Password,
    userStatus:req.body.userStatus,
    role:req.body.role
},{ new: true })

res.send({status:(200),message:"successfully updated"})      
    } catch (error) {
        res.status(400).send(error.message)
        res.send(error.message)
    }
})


DELETEuserRouter.delete('/:id', async (req, res)=> {
    try {
        let {id} = req.params
    await userModal.findByIdAndDelete(id)
   res.send({status:(200), message:"successfully deleted"})
    } catch (error) {
        res.status(400).send(error.message)
        res.send(error.message)
    }
})
module.exports ={GETuserRouter,POSTuserRouter,PUTuserRouter,DELETEuserRouter};
