const mongoose = require("mongoose")

const Out_ClientSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
clientlogo:{
    type:String,
    required:true
}
},{timestamps:true})

const Out_ClientModal = mongoose.model("Out_Client",Out_ClientSchema)

module.exports=Out_ClientModal
