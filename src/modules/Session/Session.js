const { Schema, model } = require('mongoose');

const schema = new Schema({
    patient: [{
        _id: false,
        _id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },        
    }],
    professional: {
        _id: false,
        _id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        
    },
    appointment_date: {
        type: Date,
        required: true
    },
    status: {
        type: Number,
        enum: [0, 1, 2],
        default: 0
    },
    topic: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    session_type: {
        type: Number,
        enum: [0, 1, 2],
        required: true
    },
    observation: {
        type: String,
    }
});

module.exports = model('Session', schema);