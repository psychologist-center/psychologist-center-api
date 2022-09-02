const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    register_by: {
        type: String
    },
    crp: {
        type: Number
    },
    cpf: {
        type: Number,
        required: true,
        unique: true,
    },
    phone_number:{
        type: Number,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    genre: {
        type: String,
        enum: ['M', 'F', 'NB', 'NI']
    },
    birth_date: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
        enum: ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']
    },
    user_type : {
        type: String,
        required: true,
        enum: ['patient', 'professional', 'admin']
    }
});

module.exports = model('User', schema);