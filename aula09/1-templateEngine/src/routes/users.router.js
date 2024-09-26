const express = require("express");

const router = express.Router();

const users = [];

router.post("/", (req, res) => {
  const { name, email, password } = req.body;
  const user = { name, email, password }
  users.push(user)
  res.render("created", user);
});

module.exports = router;
