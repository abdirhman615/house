const express=require("express")
const ServiceRouter=express.Router();
const {GETServiceRouter,POSTServiceRouter,DELETEServiceRouter,PUTServiceRouter} = require('../Controll/ServiceControll')


ServiceRouter.get("/",GETServiceRouter)

ServiceRouter.post("/",POSTServiceRouter)

ServiceRouter.put("/:id",PUTServiceRouter)

ServiceRouter.delete("/:id",DELETEServiceRouter)


module.exports =ServiceRouter;
