

var age = 75;
var result = '';

if (age > 4 && age < 10) {
  result = 'Eres un niño';
}

if (age > 10 && age < 18) {
  result = 'Eres un adolescente';
}

if (age >= 18 && age <= 65) {
  result = 'Eres un adulto';
}

if (age > 65) {
  result = 'Eres una persona jubilada';

}

console.log(`Resultado final: ${result}`)


///////////////////////////////////////////////////////////


var age = 5;
var result = '';

switch (age) {
  case (age < 10):
    result = "Eres un niño";
    break;
  case (age > 10):
    result = "Eres un adolescente";
    break;
  case (age > 18):
    result = 'Eres un adulto'
    break;
  case (age > 65):
    result = 'Eres una persona jubilada';
    break;
  default:
    result = 'No se cumple ninguna condición';
}

console.log(`Resultado final: ${result}`)