const express = require("express");
const userModel = require("../models/users.model");
//const validateUser = require("../middlewares/validateUser.middleware");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { first_name, last_name, email } = req.body;

    const user = await userModel.create({ first_name, last_name, email });
    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

module.exports = router;
