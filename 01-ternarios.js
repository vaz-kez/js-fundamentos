// Ternarios
// Los ternarios tienen que ser una cosa u otra....no pueden ser núltiples cosas


const age = 30;
let isAllowed;

if (age > 30) {
  isAllowed = true;
} else {
  isAllowed = false;
}

// Estas funciones son exactamente lo mismo

age > 30 ? (isAllowed = true) : (isAllowed = false);

// Estas funciones son exactamente lo mismo

isAllowed = age > 30 ? true : false


 const numberA = 2;
 const numberB = 4;
 let operation = 'multiply'

 let result

 if (operation === 'multiply') {
   result = numberA * numberB
 } else {
   result = numberA / numberB
 }

const result = operation === 'multiply' ? numberA * numberB : numberA / numberB

const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const result =
  operation === 'multiply'
    ? multiply(numberA, numberB)
    : divide(numberA, numberB);

// Si (if) la operación es igual a multiply , multiplicar los números y asignarlo a el resultado. 
//  De lo contrario (:)(else), hacer la división de los números y asignarla al resultado.