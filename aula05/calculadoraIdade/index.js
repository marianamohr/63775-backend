const moment = require("moment")

const main = () => {
    const data = moment();
    const dataNascimento = moment("29/11/1989","DD/MM/YYYY")
  console.log(dataNascimento)
    if (!dataNascimento.isValid()) {
        console.error('Data de nascimento inválida.');
        process.exit(1);
      }
    const diff = data.diff(dataNascimento, 'day');
   
    console.log(diff)

    const anos = data.diff(dataNascimento, 'years');
    dataNascimento.add(anos, 'years');

    const meses = data.diff(dataNascimento, 'months');
    dataNascimento.add(meses, 'months');

    const dias = data.diff(dataNascimento, 'days');

    console.log(`Idade aproximada: ${anos} anos, ${meses} meses, e ${dias} dias.`);
}

main()