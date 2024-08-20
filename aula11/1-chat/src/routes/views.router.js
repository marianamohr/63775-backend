const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  return res.render("index", {});
});


router.get("/teste", (req, res) => {
  return res.render("teste", {});
});

module.exports = router;
