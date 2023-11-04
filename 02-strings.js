//var name = "Marcos"
//var surname = 'Vazquez'

//var fullName = name + ' ' + surname;

//console.log(fullName)
// Marcos Vazquez

var firstIngredient = 'leche';
var secondIngredient = 'arroz';
var thirdIngredient = 'limón';
var fouthIngredient = 'canela';

//Lista de Ingredientes: leche, arroz, limón, canela

var recipe =
  'Lista de Ingrediente: ' +
  firstIngredient +
  ', ' +
  secondIngredient +
  ', ' +
  thirdIngredient +
  ' y ' +
  fouthIngredient +
  '.';

console.log(recipe)


// ``Las tildes francesas (backticks) permiten saltos de linea

var recipeInterpolated =
  `Lista de ingredientes:
- ${firstIngredient}.
- ${secondIngredient}.
- ${thirdIngredient}.
- ${fouthIngredient}.
`
console.log(recipeInterpolated);

/*
marcosvazquez@mzkez Fundamentos % node 02-strings.js
Lista de Ingrediente: leche, arroz, limón y canela.
Lista de ingredientes:
- leche.
- arroz.
- limón.
- canela.
*/

console.log('-------------')

var car = 'Fiat'
var myCar = `Mi coche es un ${car.toUpperCase()}`

console.log(myCar)
// Mi coche es un FIAT

var dog = 'CARLINO'
var myDog = `Mi perro es un ${dog.toLowerCase()}`

console.log(myDog)
//Mi perro es un carlino


var computerDescription = '   Ordenador muy potente con mucha RAM.  '
console.log(computerDescription.trim())    //.trim elimina espacios al inicio y final del texto
// Ordenador muy potente con mucha RAM.


var school = 'The PMBA'
var schoolName = school.slice(4) //.slice(posición) Indica donde empieza a mostrar el texto
//.slice(inicio, fin) Indica donde empieza y donde acaba  

console.log(schoolName)
//PMBA
