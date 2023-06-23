const mongoose = require("mongoose")

const ServiceSchema = new mongoose.Schema({
title:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
icon:{
    type:String,
    required:true
}
},{timestamps:true})

const ServiceModal = mongoose.model("Service",ServiceSchema)

module.exports=ServiceModal
