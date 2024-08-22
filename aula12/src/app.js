const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");
// Importar a instância do Multer configurada
const upload = require("./multerConfig");
// é usado para transformar o arquivo CSV em um array de objetos JavaScript (JSON).
const errorHandler = require("./errorHandler");

const app = express();

const parseCSV = (filePath) => {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      // Conecta o fluxo de leitura do arquivo CSV com o csv-parser, que converte os dados em JSON.
      .pipe(csv())
      // Para cada linha do CSV, csv-parser emite um evento data que adiciona os dados ao array results
      .on("data", (data) => results.push(data))
      // Quando a leitura do CSV termina, o array results (que contém o JSON convertido) é enviado como resposta.
      .on("end", () => resolve(results))
      // caso de algum problema, a promise é rejeitada
      .on("error", (error) => reject(error));
  });
};

app.post("/upload", upload.single("file"), async function (req, res) {
  try {
    console.log(req.file);
    res.status(200).json({ message: req.file });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para upload de arquivo CSV e tratamento do mesmo
app.post("/uploadCsv", upload.single("file"), async function (req, res) {
  try {
    const jsonData = await parseCSV(`./${req.file.path}`);
    // console.log(jsonData); // JSON resultante
    jsonData.forEach((item) => {
      const now = new Date();
      const { Vencimento } = item;
      const vencimentoInDate = new Date(Vencimento);
      const diffInMs = vencimentoInDate - now;
      const prazoRestante = Math.floor(diffInMs / (1000 * 60 * 60 * 24)); // Diferença em dias
      item.prazoRestante = prazoRestante; // Adiciona a diferença em dias
     
      if (prazoRestante <= 0) {
        console.log("Tenho que enviar um email de boleto ATRASADO", item.Nome, Vencimento);
      } else if (prazoRestante > 0 && prazoRestante <= 5) {
        console.log("Tenho que enviar um email para o cliente de Aviso", item.Nome, Vencimento);
      } else {
        console.log("Sem email", item.Nome, Vencimento); 
      }
      //console.log(`Nome: ${Nome} ${Sobrenome} - Valor: ${Valor} - Vencimento: ${prazoRestante} dias`);
    });
    //console.log(jsonData); // JSON resultante
    res.json(jsonData); // Retorna o JSON como resposta
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.use(errorHandler);

module.exports = app;
