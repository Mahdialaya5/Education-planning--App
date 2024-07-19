const student = require("../models/student");

exports.addstudent=async (req, res) => {
   try {
      const newstudent = new student(req.body)
      await newstudent.save()
        res.send({ msg: "student added successfuly" })
    } 
    catch (error) {
        console.log(error);
    }}

exports.getstudent=async (req,res) => {
    try {
            const students = await student.find().populate("guild").sort({name:1})
            res.send( students )
        } 
        catch (error) {
            console.log(error);
            res.status(400).send({ msg: error.message });
 }}