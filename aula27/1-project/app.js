const express = require("express");
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());


app.get("/test", (req, res) => {
  return res.send({message: "resposta"});
});

app.listen(8080, () => console.log("Mãe tá on"));


