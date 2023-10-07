const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    customID: {
        type: Number
    },
    title: {
        type: String,
    },
    duration: {
        type: Number,
    },
    complete: {
        type: Boolean,
    },
    description: {
        type: String,
    },
})

const taskUserSchema = new Schema({
    userName: String,
    tasks: [taskSchema],
})

module.exports = mongoose.model('TaskUser', taskUserSchema, 'tasks');