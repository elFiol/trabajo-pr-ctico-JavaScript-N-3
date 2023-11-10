let ciudadeUsuario;
const ciudadesTotal = [];
do {
  ciudadeUsuario = prompt("ingrese un nombre de ciudad:");
  if (ciudadeUsuario === undefined || ciudadeUsuario === "") {
    alert("intentelo de nuevo");
  } else {
    ciudadesTotal.push(ciudadeUsuario);
    ciudadeUsuario = "";
  }
} while (confirm("desea agregar mas ciudades?"));
for (
  let indiceVerificacion = 0;
  indiceVerificacion < ciudadesTotal.length;
  indiceVerificacion++
) {
  if (ciudadesTotal[indiceVerificacion] === null) {
    ciudadesTotal.splice(indiceVerificacion, 1);
  }
}
ciudadesTotal.splice(1, 0, "Barcelona");
document.write(
  `<ul><li>Elemento en 1era posicion : ${
    ciudadesTotal[0]
  }</li><li>Elemento en 3era posicion : ${
    ciudadesTotal[2]
  }</li><li>Elemento en ultima posicion : ${
    ciudadesTotal[ciudadesTotal.length - 1]
  }</li>`
);
ciudadesTotal.push("París");
document.write(
  `<li>Elemento en ultima posicion : ${
    ciudadesTotal[ciudadesTotal.length - 1]
  }</li></ul>`
);
document.write("<h2>Lista de ciudades</h2><ul>");
for (
  let indiceCiudades = 0;
  indiceCiudades < ciudadesTotal.length;
  indiceCiudades++
) {
  document.write(`<li>Elemento: ${ciudadesTotal[indiceCiudades]}</li>`);
}
document.write("<ul>");
document.write(`<h1>En total hay ${ciudadesTotal.length} ciudades</h1>`);