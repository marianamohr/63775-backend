const express = require("express");
const healthRoute = require("./routes/health.route");
const userRoute = require("./routes/users.route");
//const path = require("path");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect('mongodb://root:example@localhost:27017')
.catch((err) => {
    console.log(err);
    process.exit(1);
});


app.use('/health', healthRoute);
app.use('/users', userRoute)


module.exports = app;