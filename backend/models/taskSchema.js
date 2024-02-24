const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ['High', 'Moderate', 'Low'],
        required: true
    },
    checkLists: {
        type: [String],
        required: true
    },
    checkListCount:{
        type:Number
    },
    date: {
        type: String,
    }
})

module.exports = mongoose.model('Task', taskSchema)