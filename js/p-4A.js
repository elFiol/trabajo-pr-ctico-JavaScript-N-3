function numerosPrimos(numEntero) {
  const listaNumPrimos = [];
  for (let numero = 2; numero <= numEntero; numero++) {
    let esPrimo = true;
    for (let divisor = 2; divisor < numero; divisor++) {
      if (numero % divisor === 0) {
        esPrimo = false;
        break;
      }
    }
    if (esPrimo) {
      listaNumPrimos.push(numero);
    }
  }
  return listaNumPrimos;
}
const numeroUsuario = 50;
console.log(numerosPrimos(numeroUsuario));