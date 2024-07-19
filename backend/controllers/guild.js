const guild = require("../models/guild");

exports.addguild=async (req, res) => {
   try {
      const newguild = new guild(req.body)
      await newguild.save()
        res.send({ msg: "guild added successfuly" })
    } 
    catch (error) {
        console.log(error);
    }}
    
exports.getguild=async (req,res) => {
    try {
            const guilds = await guild.find().populate("instructor").sort({name:1})
            res.send( guilds )
        } 
        catch (error) {
            console.log(error);
            res.status(400).send({ msg: error.message });
 }}