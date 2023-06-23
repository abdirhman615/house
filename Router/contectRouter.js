const express=require("express")
const contectRouter=express.Router();
const {GETcontectRouter,POSTcontectRouter,DELETEcontectRouter,PUTcontectRouter} = require('../Controll/contectControll')


contectRouter.get("/",GETcontectRouter)

contectRouter.post("/",POSTcontectRouter)

contectRouter.put("/:id",PUTcontectRouter)

contectRouter.delete("/:id",DELETEcontectRouter)


module.exports =contectRouter;
