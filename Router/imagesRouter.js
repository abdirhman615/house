const express=require("express")
const imagesRouter=express.Router();
const {GETimagesRouter,POSTimagesRouter,DELETEimagesRouter,PUTimagesRouter} = require('../Controll/imagesControll')


imagesRouter.get("/",GETimagesRouter)

imagesRouter.post("/",POSTimagesRouter)

imagesRouter.put("/:id",PUTimagesRouter)

imagesRouter.delete("/:id",DELETEimagesRouter)


module.exports =imagesRouter;
