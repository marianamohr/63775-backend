const express = require("express");
const app = express();


const fakeUsers = [
  {
    id: 1,
    nome: "John",
    sobrenome: "Doe",
    idade: 25,
    email: "john.doe@example.com",
  },
  {
    id: 2,
    nome: "Mari",
    sobrenome: "Mohr",
    idade: 34,
    email: "marimohr@example.com",
  },
];


app.use(express.urlencoded({ extended: true })); // query e params
app.use(express.json()) // body

app.get("/saldar", (req, res) => {
  console.log(req.body)
  res.send("Olá pessoal, agora no express!!");
});

// localhost:8080/bemvindo
app.get("/bemvindo", (req, res) => {
  const htmlResponse = '<H1 style="color: blue;">welcome</H1>';
  res.status(200).send(htmlResponse)
});

app.get("/usuarioByQuery", (req, res) => {
  const { nome } = req.query;
  console.log(req.query);
  const foundUser = fakeUsers.find((user) => user.nome === nome);

  if (foundUser) {
    return res.status(200).json(foundUser);
  } else {
    return res.status(404).json({ error: "Usuario não encontrado!" });
  }
});

app.get("/usuarios", (req, res) => {
  res.status(200).json(fakeUsers);
});

app.get("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  const numberId = +id

  if (isNaN(numberId)) {
    return res.status(404).json({ error: "Id Invalido!" });
  }

  console.log(numberId)
  const foundUser = fakeUsers.find((user) => user.id === numberId);

  if (foundUser) {
    return res.status(200).json(foundUser)
  } else {
    return res.status(404).json({ error: "Usuario não encontrado!" });
  }
});

module.exports = app;


