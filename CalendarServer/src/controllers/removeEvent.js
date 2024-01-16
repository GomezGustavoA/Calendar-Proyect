const eventSchema = require("../models/event");

module.exports = (req, res) => {
    const { id } = req.params;

    eventSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
}