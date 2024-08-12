const { Router } = require("express");
const TicketManager = require("../class/TicketManager");
const router = Router();

const managerTickets = new TicketManager();

router.get("/", async (req, res) => {
  try {
    const usuarios = await managerTickets.consultarEventos();
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao consultar eventos." });
  }
});

router.post("/", async (req, res) => {
  const event = req.body;
  try {
    await managerTickets.criarEvento(event);
    res.status(201).json({ message: "Evento cadastrado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao cadastrar evento." });
  }
});

module.exports = router;
