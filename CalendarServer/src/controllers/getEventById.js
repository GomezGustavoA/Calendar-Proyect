const eventSchema = require("../models/event")

module.exports = (req, res) => {
    const { id }= req.params;

    eventSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
};