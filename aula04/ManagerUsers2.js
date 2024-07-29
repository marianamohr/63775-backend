const fs = require("fs").promises;

class ManagerUsers {
  #pathData;
  #id = 1;
  constructor(path) {
    this.#pathData = path;
  }
  criarUsuario = async ({ nome, sobrenome, idade, curso }) => {
    try {
      const newUser = {
        nome,
        sobrenome,
        idade,
        curso,
        id: this.#id,
      };

      let resultado = await fs.readFile(this.#pathData, "utf-8");
      const resultadoParsed = JSON.parse(resultado);
      resultadoParsed.push(newUser);
      const dataToSave = JSON.stringify(resultadoParsed);

      await fs.writeFile(this.#pathData, dataToSave);

      this.#id = this.#id + 1;
    } catch (error) {
      console.log(error);
    }
  };
}

main = async () => {
  const manager = new ManagerUsers("./data/users.json");

  await manager.criarUsuario({
    nome: "Mari",
    sobrenome: "Mohr",
    idade: 34,
    curso: "Backend",
    turma: 63775,
  });

  await manager.criarUsuario({
    nome: "Felipe",
    sobrenome: "Nascimento",
    idade: 36,
    curso: "Backend",
    turma: 63775,
  });
};

main();
