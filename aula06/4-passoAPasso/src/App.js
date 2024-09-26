const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.status(200).json({ message: "Hello Amigos Backenders!" });
});

app.get("/bemvindo", (request, response) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Bem-vindo</title>
    </head>
    <body>
      <h1 style="color: blue;">welcome</h1>
    </body>
    </html>
  `;
  response.status(200).send(html);
});

app.get("/cep/:user/:senha", (req, res) => {
    console.log(req.params)
  res.status(200).json({ message: `O Cep buscado é ${req.params.cip}` });
});

module.exports = app;
