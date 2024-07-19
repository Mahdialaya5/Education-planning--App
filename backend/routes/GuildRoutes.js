const guildController = require("../controllers/guild");
const express = require('express')
const router=express.Router()
const isAuth = require('../middlewares/isAuth')
const isAdmin=require('../middlewares/isAdmin')
//add guild
router.post("/",isAuth(), guildController.addguild)
//get guilds 
router.get('/',isAuth(),guildController.getguild)


module.exports=router