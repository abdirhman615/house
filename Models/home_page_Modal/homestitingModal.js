const mongoose = require("mongoose")

const homestitingSchema = new mongoose.Schema({
Title:{
    type:String,
    required:false,
},
Logo:{
    type:String,
    required:false
},
Name:{
    type:String,
    required:false
},
address:{
    type:String,
    required:false    
},
email:{
    type:String,
    required:false
},
phone:{
    type:Number,
    required:false
},
whatapp:{
    type:String,
    required:false
},
Facebook:{
    type:String,
    required:false
    
},
Instagram:{
    type:String,
    required:false
},
tiktok:{
    type:String,
    required:false
   
},
Herotitle:{
    type:String,
    required:false
},
HeroDiscritpion:{
    type:String,
    required:false

    
},
HerImage:{
    type:String,
    required:false
},
Footertext:{
   type:String,
    required:false
}
},{timestamps:true})

const homestitingModal = mongoose.model("homestiting",homestitingSchema)

module.exports=homestitingModal
