
const ManagerUsers = require("../class/ManagerUsers");

const managerUsers = new ManagerUsers();
const getAllUsers = async (req, res) => {
  try {
    console.log(req.xablau);
    const usuarios = await managerUsers.consultarUsuarios();
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao consultar usuários." });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const usuarios = await managerUsers.consultarUsuarios();
    const userFound = usuarios.find((u) => u.id === Number(id));

    res.status(200).json(userFound);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao consultar usuários." });
  }
};

const createUser = async (req, res) => {
  const user = req.body;
  try {
    await managerUsers.criarUsuario(user);
    res.status(201).json({ message: "Usuario cadastrado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao cadastrar usuários." });
  }
};

module.exports = { getAllUsers, getById, createUser };
