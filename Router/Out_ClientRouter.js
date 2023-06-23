const express=require("express")
const Out_ClientRouter=express.Router();
const {GETOut_ClientRouter,POSTOut_ClientRouter,DELETEOut_ClientRouter,PUTOut_ClientRouter} = require('../Controll/Out_ClientControll')


Out_ClientRouter.get("/",GETOut_ClientRouter)

Out_ClientRouter.post("/",POSTOut_ClientRouter)

Out_ClientRouter.put("/:id",PUTOut_ClientRouter)

Out_ClientRouter.delete("/:id",DELETEOut_ClientRouter)


module.exports =Out_ClientRouter;
