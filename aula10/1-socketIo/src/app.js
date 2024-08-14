const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const pathView = path.join(`${__dirname}/views`);
const viewsRouter = require("./routes/views.router");

const socketIO = require("socket.io");

const http = require("http");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);
const io = socketIO(server);

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", pathView);

const staticPath = path.join(`${__dirname}/public`);

app.use("/static", express.static(staticPath));

app.use("/views", viewsRouter);

io.on("connection", (socket) => {
  console.log("Usuário conectado", socket.id);
  socket.on("xablau", (data) => {
    console.log(socket.id, data);
  });
  socket.emit("batatinha", "tudo nosso")
  // todo mundo, menos quem trigou a mensagem
  socket.broadcast.emit("hello", "world");
  // ele manda pra todo mundo
  // desconexao
  io.emit("sopa", "sopa é janta sim!")
});

module.exports = server;
