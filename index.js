const express = require('express')
require('dotenv').config()
const cors = require('cors')
const App = express();
App.use(express.json())
const DbConnect = require("./DbConfig")
DbConnect()
App.use(cors())
const guryahaRouter = require('./Router/guryahaRouter')
const userRouter = require('./Router/userRouter')
const imagesRouter = require('./Router/imagesRouter')
const homestitingRouter = require('./Router/homestitingRouter')
const Image_gallaryRouter = require('./Router/Image_gallaryRouter')
const Out_ClientRouter = require('./Router/Out_ClientRouter')
const ServiceRouter = require('./Router/ServiceRouter')
const contectRouter = require('./Router/contectRouter')
//const loginRouter = require('./Router/LoginRouter')
App.listen(3000,()=>{
    console.log("server started")
})
// localhost:3000/
App.get("/",(req,res)=>{

    res.json("Ku so dawaaw Serverkena")

})

App.use("/guryah",guryahaRouter)
App.use("/user",userRouter)
App.use("/images",imagesRouter)
App.use("/homestiting",homestitingRouter)
App.use("/Image_gallary",Image_gallaryRouter)
App.use("/Out_Client",Out_ClientRouter)
App.use("/Service",ServiceRouter)
App.use("/contect",contectRouter)
//App.use("/login",loginRouter)

module.exports =App;

