const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Patient = new Schema({
    name: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },
    insurance: {
        type: String,
        required: true,
    },
    guardian_number: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    hobbies: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    doctor: {
        type: String,
        required: true,
    },
});

// collection model name, model, collection name
module.exports = mongoose.model('patient', Patient);
