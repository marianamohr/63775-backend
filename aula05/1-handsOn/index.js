// gerar um numero aleatorio de 1 até 20
// gere 10000 numeros aleatorios
//

const geraNumeroAleatorio = () => {
  const numero = Math.floor(Math.random() * 20) + 1;
  return numero;
};

const geraLista = (limit) => {
  const arr = new Array(limit);
  for (let index = 0; index < arr.length; index++) {
    arr[index] = geraNumeroAleatorio();
  }
  return arr;
};

const contagemDeNumeros = (lista) => {
  const numeros = {};
  lista.forEach((numero) => {
    //console.log(numero, numeros[numero]);
    if (!numeros[numero]) {
      numeros[numero] = 1;
    } else {
      numeros[numero] = numeros[numero] + 1;
    }
  });
  return numeros;
};

const main = () => {
  const lista = geraLista(10000);
  const contagem = contagemDeNumeros(lista);
  console.log(contagem);
};

main();
