function numeroPar(listaNum) {
  let numerosPares = [];
  for (let indice = 0; indice < listaNum.length; indice++) {
    if (listaNum[indice] % 2 === 0) {
      numerosPares.push(listaNum[indice]);
    }
  }
  return numerosPares;
}
const listaNumeros = [2, 5, 6, 1, 10, 13];
console.log(numeroPar(listaNumeros));