let mongoose = require('mongoose')

let doctorSchema = mongoose.Schema({
    name: String,
    specialty: String,
    email: String,
    DOB: Date
})

module.exports = mongoose.model("Doctor", doctorSchema)