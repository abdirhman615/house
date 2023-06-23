const express=require("express")
const loginRouter=express.Router();
const {POSTloginRouter} = require('../Controll/LoginControll')




loginRouter.post("/",POSTloginRouter)



module.exports =loginRouter;
