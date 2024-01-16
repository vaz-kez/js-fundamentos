
/* "return" fuera de un "if" termina la función, no permite ejecutar el resto del código */
/* "return" dentro de un "if" devuelve el resultado de ese "if" y no ejecuta más código */
// La solución es colocar 'return' al final de la función

function getPriceByCity(city) {
  //var city = 'Madrid'
  var price = 0;

  if (city === 'Madrid') {
    price = 10;
  } else if (city === 'Valencia') {
    price = 5;
  } else {
    price = 1;    // Devuelve este precio si no coincide ninguna de las anteriores
  }
  return price;  // Devuelve el precio según la ciudad
}

var priceInMadrid = getPriceByCity('Madrid')
var priceInValencia = getPriceByCity('Valencia')
var priceInCadiz = getPriceByCity('Cadiz')
console.log(`El precio en Madrid es ${priceInMadrid}`);
console.log(`El precio en Valencia es ${priceInValencia}`);
console.log(`El precio en Cadiz es ${priceInCadiz}`);

/* 'Function' nos permite invocar la función en cualquier parte del documento sin tener que 
volver a escribir todo el código. Solo se necesita el nombre de la función. 
En este caso es getPriceByCity */
/* Los ejemplos anteriores son la misma función, con el mismo contenido y comportamiento pero, 
ejecutándose individualmente en diferentes partes del projecto */

