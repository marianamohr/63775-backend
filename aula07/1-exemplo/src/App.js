import express from "express";
import ManagerUsers from "./ManagerUsers.js";

const app = express();

const managerUsers = new ManagerUsers();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Vai Brasil! É ouro!" });
});
// pegar todos os usuarios
app.get("/usuarios", async (req, res) => {
  try {
    const users = await managerUsers.consultarUsuarios();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.get("/usuarios/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const user = await managerUsers.consultaByName(name);
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
// adicionar um usuario
app.post("/usuarios", async (req, res) => {
  try {
    const user = req.body;
    const userCreated = await managerUsers.criarUsuario(user);
    return res.status(201).json({ userCreated });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
// atualizo um usuario
app.put("/usuarios/:id", async (req, res) => {
  try {
    const user = req.body;
    const { id } = req.params;
    const userUpdated = await managerUsers.updateUser(user, id);
    return res.status(200).json({ userUpdated });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
// deleta um usuario
app.delete("/usuarios/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await managerUsers.deleteUser(id);
    return res.status(204).send();
  } catch (error) {}
});

export default app;
