const eventSchema = require("../models/event")

module.exports = (req, res) => {
    const event = eventSchema(req.body);
    console.log(req.body)
    event
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
};