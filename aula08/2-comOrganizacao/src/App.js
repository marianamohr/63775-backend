const express = require("express");

const userRouter = require("./routes/users.route");
const eventRouter = require("./routes/events.route");
const log = require('./middlewares/log')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../public"));

app.use(log)

app.use("/usuarios", userRouter);
app.use("/eventos", eventRouter);

module.exports = app;
