const mongoose = require('mongoose')
const guild = require('./guild')


const studentSchema = new mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String,required:true},
    phone: { type: Number,required:true }, 
    formation: { type: String,required:true},
    guild: { type: mongoose.Schema.Types.ObjectId,ref:guild},
})
const student = mongoose.model("student", studentSchema)
module.exports = student