const User=require("../models/user")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

exports.register= async (req, res) => {
    const { email, password, role } = req.body
    try {
        if (role=="admin") {
            return res.status(401).send({ msg: "not auth !!" })
        }
        const existUser = await User.findOne({ email })
        if (existUser) {
            return res.status(400).send({ msg: "user exist ,please login" })
        }
        const newUser = new User(req.body)
        const hashedPassword = await bcrypt.hash(password, 10)
        
        newUser.password = hashedPassword
      
        await newUser.save()
       return res.status(201).send({ msg: "user added successfuly" })
    } 
    catch (error) {
        return  res.status(500).send({ msg: error.message });
    }
}

exports.login=async (req, res) => {
    const { email, password } = req.body
    try {
        const existUser = await User.findOne({ email })
        if (!existUser) {
            return res.status(400).send({ msg: "bad credential !!" })
        }
        const isMatched = await bcrypt.compare(password, existUser.password)

        if (!isMatched) {
            return res.status(400).send({ msg: "bad credential !!" })
        }
        existUser.password = undefined
        const payload = { _id: existUser._id }
        const token = jwt.sign(payload, process.env.secretKey)
        res.send({ user: existUser, token })
    } catch (error) {
        return  res.status(500).send({ msg: error.message });
}}

exports.current= (req, res) => {
  try{
    res.send(req.user);
} catch (error) {
    return  res.status(500).send({ msg: error.message });
    }
}

exports.getuser=async (req,res) => {
    try {
            const users = await User.find().sort({name:1})
          return  res.status(200).send(users)
        } 
        catch (error) {
            return  res.status(500).send({ msg: error.message });
 }}