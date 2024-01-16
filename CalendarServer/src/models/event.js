const { default: mongoose } = require("mongoose");
const monsoose = require("mongoose");

const eventSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    end:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Event", eventSchema);