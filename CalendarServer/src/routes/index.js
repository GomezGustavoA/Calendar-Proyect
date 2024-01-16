const express = require("express");
const router = express.Router();
const postEvent = require("../controllers/postEvent");
const getAllEvents = require("../controllers/getAllEvent");
const getEventbyId = require("../controllers/getEventById");
const putEvent = require("../controllers/putEvent");
const removeEvent = require("../controllers/removeEvent") 

router.post("/events", postEvent);
router.get("/events", getAllEvents);
router.get("/events/:id", getEventbyId);
router.put("/events/:id", putEvent);
router.delete("/events/:id", removeEvent);


module.exports = router;