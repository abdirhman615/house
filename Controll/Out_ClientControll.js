const express=require("express")
const GETOut_ClientRouter=express.Router();
const POSTOut_ClientRouter=express.Router();
const DELETEOut_ClientRouter=express.Router();
const PUTOut_ClientRouter=express.Router();
const Out_ClientModal = require('../Models/home_page_Modal/Out_ClientModal')


GETOut_ClientRouter.get("/",async (req,res)=>{

    const AllOut_Client = await Out_ClientModal.find()
    res.json({AllOut_Client})
})
GETOut_ClientRouter.get("/:id",async (req,res)=>{

    const Out_Clientbyid = await Out_ClientModal.findById()
    res.json({Out_Clientbyid})
})

POSTOut_ClientRouter.post("/",async(req,res)=>{
 try {
    const newOut_Client = new Out_ClientModal(req.body)
  await newOut_Client.save()
  res.send({status:(200),message:"successfully Add"})
 } catch (error) {
    res.status(400).send(error.message)
    console.log(error.message)
 }
 

})


PUTOut_ClientRouter.put('/:id', async (req, res) =>{
    try {
        let {id}=req.params

let updatedData=await Out_ClientModal.findByIdAndUpdate(id,{
    name:req.body.name,
    clientlogo:req.body.clientlogo,
    
},{ new: true })

res.send({status:(200),message:"successfully updated"})
        
    } catch (error) {
        res.status(400).send(error.message)
        res.send(error.message)
    }

})


DELETEOut_ClientRouter.delete('/:id', async (req, res)=> {
    try {
        let {id} = req.params

    await Out_ClientModal.findByIdAndDelete(id)

        res.send({status:(200), message:"successfully deleted"})
    } catch (error) {
        res.status(400).send(error.message)
        res.send(error.message)
    }
    
})


module.exports ={GETOut_ClientRouter,DELETEOut_ClientRouter,PUTOut_ClientRouter,POSTOut_ClientRouter};
