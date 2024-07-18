const obj = [
  { macas: 3, peras: 3, carne: 1, frango: 5, doces: 2 }, //14
  { macas: 1, cafes: 1, ovos: 8, frango: 1, paes: 4 }, //15
  { macas: 3, peras: 2, carne: 1, frango: 7, doces: 2 }, //15
  { macas: 1, cafes: 1, ovos: 6, frango: 1, paes: 4 }, //13
];

const lista = [];

obj.forEach((item) => {
  const chaves = Object.keys(item);
  lista.push(...chaves);
});
//console.log(lista);
var listaFiltrada = lista.filter((item, i) => {
  //console.log(lista.indexOf(item), i)
  return lista.indexOf(item) === i;
});
//console.log(listaFiltrada);
                                            // 13   seg obj
const totalDeProdutosVendidos = obj.reduce((total, objeto) => {
   console.log(total, objeto);
  const quantidadeDeProdutos = Object.values(objeto).reduce((total, valor) => {
    // [3,2,1,5,2]
   console.log(total, valor);
    return total + valor;
  }, 0);
  console.log(total, quantidadeDeProdutos);
  return total + quantidadeDeProdutos;
}, 0);

console.log("Total de produtos vendidos:", totalDeProdutosVendidos); // 57
