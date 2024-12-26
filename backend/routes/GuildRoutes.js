const guildController = require("../controllers/guild");
const express = require('express')
const router=express.Router()
const isAuth = require('../middlewares/isAuth')
const isAdmin=require('../middlewares/isAdmin')

//add guild
router.post("/",isAuth(),isAdmin,guildController.addguild)
//get guilds=> FOR INSTRUCTOR
router.get('/',isAuth(),guildController.getguild)


module.exports=router