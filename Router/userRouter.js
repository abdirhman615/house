const express=require("express")
const userRouter=express.Router();
const {GETuserRouter,POSTuserRouter,DELETEuserRouter,PUTuserRouter} = require('../Controll/userControll')


userRouter.get("/",GETuserRouter)

userRouter.post("/",POSTuserRouter)

userRouter.put("/:id",PUTuserRouter)

userRouter.delete("/:id",DELETEuserRouter)


module.exports =userRouter;