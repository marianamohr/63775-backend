const express = require("express");

const router = express.Router();

const users = [
  {
    nome: "João",
    sobrenome: "Silva",
    idade: 28,
    email: "joao.silva@example.com",
    telefone: "(11) 98765-4321",
  },
  {
    nome: "Maria",
    sobrenome: "Oliveira",
    idade: 34,
    email: "maria.oliveira@example.com",
    telefone: "(21) 97654-3210",
  },
  {
    nome: "Carlos",
    sobrenome: "Souza",
    idade: 25,
    email: "carlos.souza@example.com",
    telefone: "(31) 98564-1234",
  },
  {
    nome: "Ana",
    sobrenome: "Costa",
    idade: 29,
    email: "ana.costa@example.com",
    telefone: "(41) 98432-5678",
  },
  {
    nome: "Pedro",
    sobrenome: "Pereira",
    idade: 31,
    email: "pedro.pereira@example.com",
    telefone: "(51) 98321-8765",
  },
];

const food = [
  { name: "Burgão", price: 10 },
  { name: "hotdog", price: 15 },
  { name: "Risoto", price: 40 },
  { name: "Pasta", price: 35 },
];

router.get("/:nome/:sobrenome", (req, res) => {
  const { nome, sobrenome } = req.params;
  const user = { nome, sobrenome };
  res.render("index", user);
});

router.get("/random", (req, res) => {
  const index = Math.floor(Math.random() * 4);
  const user = { nome: users[index].nome, sobrenome: users[index].sobrenome };
  res.render("index", user);
});

router.get("/listUsers", (req, res) => {
  res.render("list", { users });
});

router.get("/listProducts", (req, res) => {
  const user = {name: "Mari", lastName: "Mohr", role: "Admin"}
  const data = { user, food, isAdmin: user.role === "Admin" };
  res.render("products", data);
});

router.get("/register", (req, res) => {
  res.render("register");
});

module.exports = router;
