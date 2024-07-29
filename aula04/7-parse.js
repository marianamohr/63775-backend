const fs = require("fs");

const operacoesAsync = async () => {
  try {
    let resultado = await fs.promises.readFile("./data/data.json", "utf-8");
    console.log(typeof resultado);
    const resultadoParsed = JSON.parse(resultado);
    console.log(typeof resultadoParsed);
    resultadoParsed.forEach((element) => {
      if (element.pais === "Brasil") {
        console.log("eh do brasil!!!!");
      }
    });
  } catch (error) {
    console.log("Error", error);
  }
};

operacoesAsync();
