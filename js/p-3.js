const conteoApariciones = new Array(11).fill(0);
const lanzarDado = () => Math.floor(Math.random() * 6) + 1;
for (let i = 0; i < 50; i++) {
  const resultadoDado1 = lanzarDado();
  const resultadoDado2 = lanzarDado();
  const suma = resultadoDado1 + resultadoDado2;
  conteoApariciones[suma - 2]++;
}
for (let i = 0; i < conteoApariciones.length; i++) {
  document.write(`<p>La suma ${i + 2} apareció ${conteoApariciones[i]} veces.</p>`);
}