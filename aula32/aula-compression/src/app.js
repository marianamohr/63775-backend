const express = require("express");
const compression = require("express-compression");

const app = express();
const server = app.listen(8080, () => console.log("Listening on 8080"));

// GZIP
/*
app.use(compression()); // primeiro roda sem, para ver a diferença

app.get("/stringridiculamentegrande", (req, res) => {
  let string = "Olá, Coders! Eu sou uma string ridiculamente grande!";
  for (let i = 0; i < 10e4; i++) {
    string += " Olá, Coders! Eu sou uma string ridiculamente grande!";
  }
  res.send(string);
});
*/
// BROTLI
/*
app.use(
  compression({
    brotli: { enable: true, zlib: {} },
  })
);
*/
app.get("/stringridiculamentegrande", (req, res) => {
  let string = "Outra frase longa!";
  for (let i = 0; i < 10e6; i++) {
    string += " Outra frase longa!";
  }
  res.send(string);
});
