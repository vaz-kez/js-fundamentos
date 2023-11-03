var two = 2;
var twoWithDecimals = 2.5;
var negative = -2;


// Suma
var sum = 3 + 2
console.log(`La suma vale: ${sum}`);


// Resta
var substract = 10 - 4
console.log(`La resta vale: ${substract}`);


// Multiplicación
var multiply = 6 * 4
console.log(`La multiplicación vale: ${multiply}`);


// División
var divide = 40 / 4
console.log(`La división vale: ${divide}`) / 4

// División con decimales

var divideWithDecimals = 25 / 4
console.log(`La división con decimales vale: ${divideWithDecimals}`);


// Resto
var rest = 25 % 4
console.log(`El resto vale: ${rest}`);


// Potencia
var power = 5 ** 2
console.log(`La potencia vale: ${power}`);


// Calcula primero los paréntesis y luego el total
var complexCalculus = 2 + (2 * (4 + 5)) / 5 + 6;
console.log(complexCalculus);
// 11.6

// Calcula  el total
var complexCalculus = 2 + 2 * 4 + 5 / 5 + 6;
console.log(complexCalculus);
// 17

var firstCalc = 2 * 4 + 5;
var complexCalculus = 2 + firstCalc / 5 + 6;
console.log(complexCalculus);
// 10.6


var numberAsString = '30';
var number = 35;

console.log(numberAsString + number); // 3035
console.log(number + numberAsString); // 3530
// console.log(number + +numberAsString); // 65 El segundo + convierte el string en número

const numberAsNumber = Number(NumberAsString)
console.log(number + numberAsNumber)

//Nan (Not a Number)