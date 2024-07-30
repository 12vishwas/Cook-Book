const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Usermodel = require("./models/User")
const bodyparser = require("body-parser")

const app = express()

app.use(express.json())

app.use(cors())

const port = process.env.PORT || 3000;

mongoose.connect("mongodb://127.0.0.1:27017/cookbook")

app.post("/login", (req,res) => {
    const {name, password} = req.body;
    Usermodel.findOne({name: name})
    .then((user) => {
         if(user) {
            if(user.password === password) {
                res.json({message: "Login Success"})
                }
            else {
                res.json({message: "Password is incorrect"})
                }
                }
        else {
            res.json({message: "User not found"})
        }
    })
})

app.post("/register", (req,res) => {
    Usermodel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))

})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})