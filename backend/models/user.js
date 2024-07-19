const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
   email: { type: String,required:true,trim:true,lowercase:true},
   name:{type:String,required:true},
   password : { type:String},
   role:{type:String,enum:["instructor","admin"]},
    })
const User = mongoose.model("user", userSchema)
module.exports = User