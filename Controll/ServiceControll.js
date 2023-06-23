const express=require("express")
const GETServiceRouter=express.Router();
const POSTServiceRouter=express.Router();
const DELETEServiceRouter=express.Router();
const PUTServiceRouter=express.Router();
const ServiceModal = require('../Models/home_page_Modal/ServiceModal')


GETServiceRouter.get("/",async (req,res)=>{

    const AllService = await ServiceModal.find()
    res.json({AllService})
})
GETServiceRouter.get("/:id",async (req,res)=>{

    const Servicebyid = await ServiceModal.findById()
    res.json({Servicebyid})
})

POSTServiceRouter.post("/",async(req,res)=>{
 try {
    const newService = new ServiceModal(req.body)
  await newService.save()
  res.send({status:(200),message:"successfully Add"})
 } catch (error) {
    res.status(400).send(error.message)
    console.log(error.message)
 }
 

})


PUTServiceRouter.put('/:id', async (req, res) =>{
    try {
        let {id}=req.params

let updatedData=await ServiceModal.findByIdAndUpdate(id,{
    title:req.body.title,
    description:req.body.description,
    icon:req.body.icon,
    
},{ new: true })

res.send({status:(200),message:"successfully updated"})
        
    } catch (error) {
        res.status(400).send(error.message)
       
    }

})


DELETEServiceRouter.delete('/:id', async (req, res)=> {
    try {
        let {id} = req.params

    await ServiceModal.findByIdAndDelete(id)

        res.send({status:(200), message:"successfully deleted"})
    } catch (error) {
        res.status(400).send(error.message)
    }
    
})


module.exports ={GETServiceRouter,DELETEServiceRouter,PUTServiceRouter,POSTServiceRouter};
