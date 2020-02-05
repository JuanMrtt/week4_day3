const mongoose = require('mongoose')

const Schema = mongoose.Schema
const dogSchema = new Schema({
    name: String,
    age: Number,
    color: String
}, {
    timestamps: true
})

const Dog = mongoose.model('Dog', dogSchema)

module.exports = Dog