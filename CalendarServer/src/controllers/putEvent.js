const eventSchema = require("../models/event");

module.exports = (req, res) => {
    const { id } = req.params;
    const { title, start, end } = req.body;

    eventSchema
    .updateOne({ _id: id },{ $set: {title, start, end} })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
}