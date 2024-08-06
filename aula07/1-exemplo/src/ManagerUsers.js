import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class ManagerUsers {
  #pathData;

  constructor() {
    this.#pathData = path.resolve(__dirname, "users.json");
  }

  #lerArquivo = async () => {
    console.log(__dirname, __filename);
    let resultado = await fs.promises.readFile(this.#pathData, "utf-8");
    const resultadoParsed = await JSON.parse(resultado);
    return resultadoParsed;
  };

  #gravarArquivo = async (data) => {
    await fs.promises.writeFile(this.#pathData, JSON.stringify(data));
  };
  criarUsuario = async (user) => {
    if (!user.name || !user.sobrenome || !user.idade || !user.curso) {
      throw new Error("invalid values!");
    }
    const resultadoParsed = await this.#lerArquivo();
    let id;
    if (!resultadoParsed.at(-1)) {
      id = 1;
    } else {
      id = resultadoParsed.at(-1).id + 1;
    }
    user.id = id;
    resultadoParsed.push(user);

    const dataToSave = await JSON.stringify(resultadoParsed);

    await fs.promises.writeFile(this.#pathData, dataToSave);
    return user;
  };

  consultarUsuarios = async () => {
    const resultadoParsed = await this.#lerArquivo();
    return resultadoParsed;
  };

  consultaByName = async (name) => {
    const resultadoParsed = await this.#lerArquivo();
   // const userFound = resultadoParsed.filter((user) =>  user.name.toLowerCase().includes(name.toLowerCase()));
    const userFound = resultadoParsed.filter((user) =>  user.name.toLowerCase() === name.toLowerCase());
    return userFound;
  };

  updateUser = async (dataToUpdate, id) => {
    if (!dataToUpdate.name || !dataToUpdate.sobrenome || !dataToUpdate.idade || !dataToUpdate.curso) {
        throw new Error("invalid values!");
      }
    const resultadoParsed = await this.#lerArquivo();
    const index = resultadoParsed.findIndex((user) => user.id === +id);

    const newUser = { id: +id, ...resultadoParsed[index], ...dataToUpdate };
    console.log(resultadoParsed[index]);
    resultadoParsed[index] = newUser;
    await this.#gravarArquivo(resultadoParsed);
    return resultadoParsed[index];
  };

  deleteUser = async (id) => {
    const resultadoParsed = await this.#lerArquivo();
    const currentLength = resultadoParsed.length;
    const users = resultadoParsed.filter((user) => user.id !== +id);
    if (currentLength === users.length) {
      return false;
    }

    await this.#gravarArquivo(users);
    return id;
  };
}
