const gradosFahreit = (gradosCelciusCalcular) =>
  (gradosCelciusCalcular * 9) / 5 + 32;
const gradosCelcius = 25;
console.log(
  gradosCelcius +
    "° grados Celcius serian igual a " +
    gradosFahreit(gradosCelcius) +
    "° grados fahreit"
);