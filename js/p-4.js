const esNumeropar = (numero) => numero % 2 === 0;
const numeroIngresado = parseInt(prompt("Ingrese un número: "));
if (isNaN(numeroIngresado)) {
  document.write("ese no es un numero");
} else if (esNumeropar(numeroIngresado)) {
  document.write("El número es par");
} else if (numeroIngresado === 0) {
  document.write("es un número neutro");
} else {
  document.write("El número no es par");
}