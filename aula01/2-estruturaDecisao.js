const numero = 10;

if (numero === 10) {
  console.log("É igual a 10");
} else {
  console.log("É diferente de 10");
}

switch (numero) {
  case 10:
    console.log("É igual a 10");
    break;

  case 9:
    console.log("É igual a 9");
    break;

  default:
    console.log("Nenhum numero conhecido");
    break;
}

const xablau = {
// key  value
   10: "O valor é 10",
   9: "O valor é 9",
   8: "O valor é 8"
}

console.log(xablau[10])