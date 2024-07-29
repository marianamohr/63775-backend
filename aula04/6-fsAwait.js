
const fs = require("fs").promises;

const operacoesAsync = async () => {
  try {
    await fs.writeFile(
      "./data/exemploPromessa.txt",
      "Hello Coders! Virei um arquivo!"
    );
    let resultado = await fs.readFile(
      "./data/exemploPromessa.txt",
      "utf-8"
    );
    console.log(resultado);
    await fs.appendFile(
      "./data/exemploPromessa.txt",
      " Mais conteúdo! "
    );
    resultado = await fs.readFile(
      "./data/exemploPromessa.txt",
      "utf-8"
    );
    console.log(resultado);
  } catch (error) {
    console.log("Error", error);
  }
};
/*
fs.writeFile("./data/exemploPromessa.txt", "Hello Coders! Virei um arquivo!")
  .then((err) => {
    if (error) {
      return error;
    }
    fs
      .readFile("./data/exemploPromessa.txt", "utf-8")
      .then((result) => {
        console.log(result);
        fs
          .appendFile("./data/exemploPromessa.txt", " Mais conteúdo! ")
          .then(() => {})
          .catch(() => {});
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
*/
operacoesAsync();
