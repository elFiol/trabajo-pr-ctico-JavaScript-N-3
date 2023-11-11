function tablaMultiplicar(numeroUsu) {
  for (let indice = 0; indice <= 10; indice++) {
    document.write(`<p>${numeroUsu} x ${indice} = ${numeroUsu * indice}</p>`);
  }
}
const numero = parseInt(prompt("ingrese un numero a multiplicar hasta el 10"));
tablaMultiplicar(numero);