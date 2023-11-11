function TextoPar() {
  const esNumeropar = (numero) => numero % 2 === 0;
  const numeroIngresado = parseInt(prompt("Ingrese un número: "));
  if (isNaN(numeroIngresado)) {
    return "ese no es un numero";
  } else if (numeroIngresado === 0) {
    return "es un número neutro";
  } else if (esNumeropar(numeroIngresado)) {
    return "El número es par";
  } else {
    return "El número no es par";
  }
}
document.write(TextoPar());