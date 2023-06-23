const express=require("express")
const GETguryahaRouter=express.Router();
const POSTguryahaRouter=express.Router();
const DELETEguryahaRouter=express.Router();
const PUTguryahaRouter=express.Router();
const guryahaModal = require('../Models/guryahaModal')
GETguryahaRouter.get("/",async (req,res)=>{

    const Allguryaha = await guryahaModal.find().populate([{
        path:"users_id",
        model:"users",
        select:"name Email userStatus role"
    }])
    res.json({Allguryaha})
})
GETguryahaRouter.get("/:id",async (req,res)=>{

    const guryahabyid = await guryahaModal.findById()
    res.json({guryahabyid})
})

POSTguryahaRouter.post("/",async(req,res)=>{
 try {
    const newguryaha = new guryahaModal(req.body)
  await newguryaha.save()
  res.send({status:(200),message:"successfully Add"})
 } catch (error) {
    res.status(400).send(error.message)
    console.log(error.message)
 }
 

})


PUTguryahaRouter.put('/:id', async (req, res) =>{
    try {
        let {id}=req.params

let updatedData=await guryahaModal.findByIdAndUpdate(id,{
    typekisa:req.body.typekisa,
    area:req.body.area,
    address:req.body.address,
    age:req.body.age,
    rent:req.body.rent,
    deposit:req.body.deposit,
    parking:req.body.parking,
    imagesPreview:req.body.imagesPreview,
    isAvalibile:req.body.isAvalibile,
    rooms:req.body.rooms,
    musqulaha:req.body.musqulaha,
    masterRoom:req.body.masterRoom,
    faahfaahin:req.body.faahfaahin
    // users:req.body.users
    
},{ new: true })

res.send({status:(200),messSalary:"successfully updated"})
        
    } catch (error) {
        res.status(400).send(error.message)
        res.send(error.message)
    }

})


DELETEguryahaRouter.delete('/:id', async (req, res)=> {
    try {
        let {id} = req.params

    await guryahaModal.findByIdAndDelete(id)

        res.send({status:(200), message:"successfully deleted"})
    } catch (error) {
        res.status(400).send(error.message)
        res.send(error.message)
    }
    
})


module.exports ={GETguryahaRouter,DELETEguryahaRouter,PUTguryahaRouter,POSTguryahaRouter};
