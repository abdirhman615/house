const express=require("express")
const Image_gallaryRouter=express.Router();
const {GETImage_gallaryRouter,POSTImage_gallaryRouter,DELETEImage_gallaryRouter,PUTImage_gallaryRouter} = require('../Controll/Image_gallaryControll')


Image_gallaryRouter.get("/",GETImage_gallaryRouter)

Image_gallaryRouter.post("/",POSTImage_gallaryRouter)

Image_gallaryRouter.put("/:id",PUTImage_gallaryRouter)

Image_gallaryRouter.delete("/:id",DELETEImage_gallaryRouter)


module.exports =Image_gallaryRouter;
