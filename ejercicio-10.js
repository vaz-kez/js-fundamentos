/*
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve 
la suma de todos los números de la matriz. Puedes usar este array para probar tu función:
*/
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  let total = 0;
  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] === 'number') {
      total += param[i];
    } else {
      // throw new Error("Invalid value in the list");
      // Utilizamos 'throw' en  lugar del 'console.log' para parar la ejecución de la función. Si hay un error, en ocasiones, no se continua.
      console.log('Not a number');
    }
  }
  return total;
}
console.log(sumAll(numbers)); // 96     

