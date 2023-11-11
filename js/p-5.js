function esMayusMinus(textoIngresado) {
  let tieneMayusculas = false;
  let tieneMinusculas = false;
  for (let i = 0; i < textoIngresado.length; i++) {
    const caracter = textoIngresado.charAt(i);
    if ("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".includes(caracter)) {
      tieneMayusculas = true;
    } else if ("abcdefghijklmnñopqrstuvwxyz".includes(caracter)) {
      tieneMinusculas = true;
    }
  }
  if (tieneMayusculas && tieneMinusculas) {
    return "El texto tiene mayúsculas y minúsculas.";
  } else if (tieneMayusculas) {
    return "El texto tiene solo mayúsculas.";
  } else if (tieneMinusculas) {
    return "El texto tiene solo minúsculas.";
  } else {
    return "El texto no tiene ni mayúsculas ni minúsculas o directamente no es un texto.";
  }
}
const texto = prompt("Ingrese el texto");
document.write(`<p>${esMayusMinus(texto)}</p>`);