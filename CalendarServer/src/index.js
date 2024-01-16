const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/index")
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;


//middleware
app.use(cors());
app.use(express.json());
app.use('/calendar', userRoutes);

// routes
app.get("/", (req, res) => {
    res.send("welcome to my API");
})

//mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("connected to MongoDB Atlas"))
    .catch((error) =>(console.log(error)));

app.listen(port, () => console.log('server listening on port', port));
