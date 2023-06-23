const express=require("express")
const guryahaRouter=express.Router();
const {GETguryahaRouter,POSTguryahaRouter,DELETEguryahaRouter,PUTguryahaRouter} = require('../Controll/guryahaControll')


guryahaRouter.get("/",GETguryahaRouter)

guryahaRouter.post("/",POSTguryahaRouter)

guryahaRouter.put("/:id",PUTguryahaRouter)

guryahaRouter.delete("/:id",DELETEguryahaRouter)


module.exports =guryahaRouter;
