const fs = require("fs");

const xablau = require("../pkg/persistencia")

class TicketManager {
    #pathData = `./data/events.json`;
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
  
    consultarEventos = async () => {
      const teste = await this.persistencia.getData()
      console.log(teste)
      const resultadoParsed =  await this.persistencia.getData()
      return resultadoParsed;
    };
  
    updateEvent = async (dataToUpdate, id) => {
      const resultadoParsed =  await this.persistencia.getData()
  
      const userFound = resultadoParsed.filter((user) => user.name === name);
      return userFound;
    };
  
    criarEvento = async (event) => {
      const resultadoParsed =  await this.persistencia.getData()
      const id = resultadoParsed.at(-1).id + 1;
      event.id = id;
      resultadoParsed.push(event);
  
      const dataToSave = await JSON.stringify(resultadoParsed);
  
      await fs.promises.writeFile(this.#pathData, dataToSave);
    };
  }

  module.exports = TicketManager