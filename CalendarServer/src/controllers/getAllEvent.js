const eventSchema = require("../models/event")

module.exports = (req, res) => {
    eventSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
};