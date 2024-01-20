// Scope y Shadowing


var name = 'Marcos';
console.log('1. name:', name);

// Esta función agrega el cambio de valor a la variable 'name'
function changeName(newName) {
  name = newName;
}

// En este console.log no estamos invocando la función
console.log('2. name:', name);

/////////////////////////////////////
changeName('Alberto');
console.log('3. name: ', name);

console.log('--------------------------------')

///////////////////////////////////////////////////////////////////

function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function doOperation(operation, a, b) {
  if (operation === 'sum') {
    return sum(a, b);
  } else if (operation === 'substract') {
    return substract(a, b);
  } else {
    return 'No operation'
  }
}

const result = doOperation('sum', 3, 4);

console.log(`El resultado es: ${result}`);












