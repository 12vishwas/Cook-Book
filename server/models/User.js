const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name: String,
    password: String
},{versionKey: false})

const Usermodel = mongoose.model("users",Schema)

module.exports = Usermodel