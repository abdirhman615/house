const mongoose = require("mongoose")
const joi=require("joi")
mongoose.pluralize(null)
const userSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
Email:{
    type:String,
    required:true,
},
Password:{
    type:String,
    required:true
},
userStatus:{
    type:String,
    enum:["active","pending","blocked"],
    default:"active"
},
role:{
    type:String,
    required:true
}
},{timestamps:true})
const userModal = mongoose.models.users || mongoose.model("users",userSchema)



module.exports={userModal}