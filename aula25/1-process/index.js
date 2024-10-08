import express from "express";
//import config from "./config/config.js";
import program from "./commander.js";

const app = express();

const PORT = program.p;
const ENV = program.Mode;

// node server.js -mode prd
// node server.js
app.get("/", (req, res) => {
  res.send(`Hello World from ${ENV}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
