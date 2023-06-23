const express=require("express")
const homestitingRouter=express.Router();
const {GEThomestitingRouter,POSThomestitingRouter,DELETEhomestitingRouter,PUThomestitingRouter} = require('../Controll/homestitingControll')


homestitingRouter.get("/",GEThomestitingRouter)

homestitingRouter.post("/",POSThomestitingRouter)

homestitingRouter.put("/:id",PUThomestitingRouter)

homestitingRouter.delete("/:id",DELETEhomestitingRouter)


module.exports =homestitingRouter;
