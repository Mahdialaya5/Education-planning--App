const studentController = require("../controllers/student");
const express = require('express')
const router=express.Router()
const isAuth = require('../middlewares/isAuth')
const isAdmin=require('../middlewares/isAdmin')
//add student
router.post("/",isAuth(),isAdmin,studentController.addstudent)
//get students
router.get('/',isAuth(),isAdmin,studentController.getstudent)


module.exports=router