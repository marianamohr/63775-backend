const fs = require("fs");

class Persistencia {
    #pathData
    constructor(path){
        this.#pathData = path

    }

    #lerArquivo = async () => {
        let resultado = await fs.promises.readFile(this.#pathData, "utf-8");
        const resultadoParsed = await JSON.parse(resultado);
        return resultadoParsed;
      };

      getData = async () => {
        const arquivo =  this.#lerArquivo()
        return arquivo;
      }


}

module.exports = Persistencia