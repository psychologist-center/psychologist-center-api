const { Schema, model, now } = require("mongoose");

const schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        enum: ["metáfora", "transe", "ferramenta"],
        required: true,
    },
    create_date: {
        type: Date,
        default: now,
    },
    user_id: {
        type: String,
        required: true,
    },
});

module.exports = model("Resource", schema);
