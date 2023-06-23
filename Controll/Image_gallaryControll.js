const express=require("express")
const GETImage_gallaryRouter=express.Router();
const POSTImage_gallaryRouter=express.Router();
const DELETEImage_gallaryRouter=express.Router();
const PUTImage_gallaryRouter=express.Router();
const Image_gallaryModal = require('../Models/home_page_Modal/Image_gallaryModal')


GETImage_gallaryRouter.get("/",async (req,res)=>{

    const AllImage_gallary = await Image_gallaryModal.find()
    res.json({AllImage_gallary})
})
GETImage_gallaryRouter.get("/:id",async (req,res)=>{

    const Image_gallarybyid = await Image_gallaryModal.findById()
    res.json({Image_gallarybyid})
})

POSTImage_gallaryRouter.post("/",async(req,res)=>{
 try {
    const newImage_gallary = new Image_gallaryModal(req.body)
  await newImage_gallary.save()
  res.send({status:(200),message:"successfully Add"})
 } catch (error) {
    res.status(400).send(error.message)
    console.log(error.message)
 }
 

})


PUTImage_gallaryRouter.put('/:id', async (req, res) =>{
    try {
        let {id}=req.params

let updatedData=await Image_gallaryModal.findByIdAndUpdate(id,{
    img_title:req.body.img_title,
    Image_gallary:req.body.Image_gallary,
    
},{ new: true })

res.send({status:(200),message:"successfully updated"})
        
    } catch (error) {
        res.status(400).send(error.message)
        res.send(error.message)
    }

})


DELETEImage_gallaryRouter.delete('/:id', async (req, res)=> {
    try {
        let {id} = req.params

    await Image_gallaryModal.findByIdAndDelete(id)

        res.send({status:(200), message:"successfully deleted"})
    } catch (error) {
        res.status(400).send(error.message)
        res.send(error.message)
    }
    
})


module.exports ={GETImage_gallaryRouter,DELETEImage_gallaryRouter,PUTImage_gallaryRouter,POSTImage_gallaryRouter};
