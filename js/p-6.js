const calcularPerimetro = (ladoA, ladoB) => 2 * (ladoA + ladoB);
const ladoUsuA = parseInt(
  prompt("ingrese el valor del primer lado de un rectangulo")
);
const ladoUsuB = parseInt(
  prompt("ingrese el valor del segundo lado de un rectangulo")
);
document.write(
  `<p>el perimetro del rectangulo es de ${calcularPerimetro(
    ladoUsuA,
    ladoUsuB
  )}</p>`
);
// aclaro que esto todavia no me lo enseñaron en la escuela (o no me acuerdo)