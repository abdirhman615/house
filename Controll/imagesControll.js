const express=require("express")
const GETimagesRouter=express.Router();
const POSTimagesRouter=express.Router();
const DELETEimagesRouter=express.Router();
const PUTimagesRouter=express.Router();

const {imagesModal} = require('../Models/imagesModal')
GETimagesRouter.get("/",async (req,res)=>{
    const Allimages = await imagesModal.find().populate([{
        path:"guryaha_id",
        model:"guryaha",
        select:"typekisa address area imagesPreview rooms musqulaha masterRoom users_id"
    
    }])
    res.json({Allimages})
})
GETimagesRouter.get("/:id",async (req,res)=>{

    const imagesbyid = await imagesModal.findById()
    res.json({imagesbyid})
})

POSTimagesRouter.post("/",async(req,res)=>{
 try {
    const newimages = new imagesModal(req.body)
  await newimages.save()
  res.send({status:(200),message:"successfully Add"})
 } catch (error) {
    res.status(400).send(error.message)
    console.log(error.message)
 }
 
})


PUTimagesRouter.put('/:id', async (req, res) =>{
    try {
        let {id}=req.params

let updatedData=await imagesModal.findByIdAndUpdate(id,{
    guryaha:req.body.guryaha,
    pathim_age:req.body.pathim_age
    
},{ new: true })

res.send({status:(200),messSalary:"successfully updated"})
        
    } catch (error) {
        res.status(400).send(error.message)
        res.send(error.message)
    }

})


DELETEimagesRouter.delete('/:id', async (req, res)=> {
    try {
        let {id} = req.params

    await imagesModal.findByIdAndDelete(id)

        res.send({status:(200), message:"successfully deleted"})
    } catch (error) {
        res.status(400).send(error.message)
        res.send(error.message)
    }
    
})


module.exports ={GETimagesRouter,DELETEimagesRouter,PUTimagesRouter,POSTimagesRouter};
