// Anonymous and Arrow functions


// Función de suma, normal
function sum(num1, num2) {
  return num1 + num2
}

varTotalSum = sum(3, 5)
varTotalSum2 = sum(12, 9)
varTotalSum3 = sum(33, 8)
varTotalSum4 = sum(17, 4)

console.log(`La sumas totales valen: ${varTotalSum}, ${varTotalSum2}, ${varTotalSum3}, ${varTotalSum4}`);

///////////////////////////////////////////////////

// Función anónima
var substract = function (a, b) {
  return a - b;
};

console.log(`La resta vale: ${substract(12, 27)}`)

///////////////////////////////////////////////

var sum = function (a, b) {
  return a + b;
};

console.log(`La suma vale: ${sum(21, 27)}`)

/////////////////////////////////////////////////

// Arrow Function
var multiply = (a, b) => {
  return a * b;
}

console.log(`La multiplicación vale: ${multiply(7, 7)}`)

////////////////////////////////

/* Las arrow fuction también se pueden escribir de la siguiente manera */
// Implicit Return

var multiply = (a, b) => a * b;

console.log(`El implicity return es:  ${multiply(4, 9)}`)
