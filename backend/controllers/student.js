const student = require("../models/student");

exports.addstudent=async (req, res) => {
   try {
      const newstudent = new student(req.body)
      await newstudent.save()
       return  res.status(201).send({ msg: "student added successfuly" })
    } 
    catch (error) {
        return  res.status(500).send({ msg: error.message });
    }}

exports.getstudent=async (req,res) => {
    try {
            const students = await student.find().populate("guild").sort({name:1})
          return   res.status(200).send(students)
        } 
        catch (error) {
          return  res.status(500).send({ msg: error.message });
 }}