const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    title: { type: string, required: true }, 
    start: {type: date, required: true },
    end: { type: Date },
    color: { type: String, default: '#f7d6e7'}
})

const Event = mongoose.model('Event', EventSchema)
module.exports = Event