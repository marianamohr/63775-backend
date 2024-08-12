const fs = require("fs");
const xablau = require("../pkg/persistencia")

class ManagerUsers {
    #pathData = `./data/users.json`;
    constructor() {
     this.persistencia = new xablau(this.#pathData)
    }

    criarUsuario = async (user) => {
      const resultadoParsed =  await this.persistencia.getData()
      const id = resultadoParsed.at(-1).id + 1;
      user.id = id;
      resultadoParsed.push(user);
  
      const dataToSave = await JSON.stringify(resultadoParsed);
  
      await fs.promises.writeFile(this.#pathData, dataToSave);
    };
  
    consultarUsuarios = async () => {
      const resultadoParsed =  await this.persistencia.getData()
      return resultadoParsed;
    };
  
    consultaByName = async (name) => {
      const resultadoParsed =  await this.persistencia.getData()
      const userFound = resultadoParsed.filter((user) => user.name === name);
      return userFound;
    };
  
    updateUser = async (dataToUpdate, id) => {
      const resultadoParsed =  await this.persistencia.getData()
  
      const userFound = resultadoParsed.filter((user) => user.name === name);
      return userFound;
    };
  }

  module.exports = ManagerUsers;