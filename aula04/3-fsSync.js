const fs = require("fs");

fs.writeFileSync("./data/exemplo.txt", "Hello Coders! Virei um arquivo! Uhulll");

exists = fs.existsSync("./data/exemplo.txt");
console.log(exists)
if (exists) {
  let conteudo = fs.readFileSync("./data/exemplo.txt", "utf-8");
  console.log(conteudo);

  fs.appendFileSync("./data/exemplo.txt", " Mais conteudo!!");

  conteudo = fs.readFileSync("./data/exemplo.txt", "utf-8");
  console.log(conteudo);

  fs.unlinkSync("./data/exemplo.txt");
}