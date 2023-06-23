const mongoose = require("mongoose")

const Image_gallarySchema = new mongoose.Schema({
img_title:{
    type:String,
    required:true
},
image:{
    type:String,
    required:true
}
},{timestamps:true})

const Image_gallaryModal = mongoose.model("Image_gallary",Image_gallarySchema)

module.exports=Image_gallaryModal
