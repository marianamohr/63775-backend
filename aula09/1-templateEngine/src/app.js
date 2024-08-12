const express = require("express");
const viewRouter = require("./routes/views.router")
const userRouter = require("./routes/users.router")
const { engine } = require("express-handlebars");
const path = require("path");


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pathPublic = path.join(__dirname, '..' ,'public')
app.use(express.static(pathPublic))

const pathView = path.join(`${__dirname}/views`);
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", pathView);

app.use("/views", viewRouter)
app.use("/user", userRouter)

app.get("/hello", (req, res) => {
  return res.status(200).json({ message: "Hello" });
});

module.exports = app;
