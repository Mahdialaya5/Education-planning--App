const mongoose = require('mongoose')
const user = require('./user')


const guildSchema = new mongoose.Schema({
    name: { type: String, required: true },
   formation: { type: String,required:true},
   instructor: { type: mongoose.Schema.Types.ObjectId,ref:user },
    })
const guild = mongoose.model("guild", guildSchema)
module.exports = guild