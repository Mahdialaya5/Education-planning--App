const guild = require("../models/guild");

exports.addguild=async (req, res) => {
   try {
      const newguild = new guild(req.body)
      await newguild.save()
     return   res.status(201).send({ msg: "guild added successfuly" })
    } 
    catch (error) {
          return  res.status(500).send({ msg: error.message });
    }}
    
exports.getguild=async (req,res) => {
    try {
            const guilds = await guild.find().populate("instructor").sort({name:1})
           return res.status(200).send( guilds )
        } 
        catch (error) {
           return  res.status(500).send({ msg: error.message });
 }}