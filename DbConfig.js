const mongoose = require('mongoose')
mongoose.set('strictQuery',false)
mongoose.pluralize(null)
const DbConnect = async ()=>{

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/house_system")
        console.log("database connected")

    } catch (error) {

        console.log(error.message)
        
    }

}

module.exports= DbConnect
