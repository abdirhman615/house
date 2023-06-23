const mongoose = require("mongoose")

const guryahaSchema = new mongoose.Schema({
typekisa:{
    type:String,
    required:true
},
area:{
    type:String,
    required:true
},
address:{
    type:String,
    required:true
},
age:{
    type:String,
    required:true

    
},
rent:{
    type:String,
    required:true
},
deposit:{
    type:Number,
    required:true
   
},
parking:{
    type:String,
    enum:["active","pending","blocked"],
    required:true
},
imagesPreview:{
    type:String,

    
},
isAvalibile:{
    type:String,
    required:true
},
rooms:{
    type:Number,
    required:true
   
},
musqulaha:{
    type:Number,
    required:true
},
masterRoom:{
    type:Number,
    required:true

    
},
faahfaahin:{
    type:String,
    required:true
},
users_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
   required:true
}
// user:{
//     type:String,
//     required:true
   
// }
},{timestamps:true})

const guryahaModal = mongoose.model("guryaha",guryahaSchema)

module.exports=guryahaModal
