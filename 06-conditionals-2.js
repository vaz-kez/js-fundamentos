/*
if () {}
if () {} else {}
if () {} else if {} else {}
*/

//switch (city) = if (city ==='.....')
//else if () = case
//break = deja de comparar si coincide el case
//default = cuando no coincide ninguno de los case

var price;
var city = "Madrid";

switch (city) {
  case "Valencia":
    price = 10;
    break;
  case "Madrid":
    price = 20;
    break;
  case "Barcelona":
    price = 30;
    break;
  default:
    price = 5;
}
console.log(`El precio del metro para ${city} es de ${price} euros`);
