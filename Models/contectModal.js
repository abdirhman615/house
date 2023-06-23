const mongoose = require("mongoose")
const joi=require("joi")
mongoose.pluralize(null)
const contectSchema = new mongoose.Schema({

name:{
    type:String,
    required:true
},
phone:{
    type:Number,
    required:true
},
massage:{
    type:String,
    required:true
},

},{timestamps:true})

const contectModal = mongoose.models.contect || mongoose.model("contect",contectSchema)
module.exports={contectModal}
