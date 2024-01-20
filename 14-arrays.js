// Arrays
// Colección de variables en una caja [] representadas por 'marks'

const marks = [10, 4, 7, 8];

marks[3] // Accede a la 'posición' de la variable.....En JS siempre se empieza por 'cero'

console.log(`El array marks tiene una longitud de ${marks.length} posiciones`)

const length = marks.length; // 7

// Acceder al último elemento de un array. Longitud total -1
const lastMark = marks[marks.length - 1];
console.log(`La última nota es: ${lastMark}`);

// Cambiar la nota del alumno en la primera posición (posición 0), nota inicial 10
// posición = nueva nota
marks[0] = 9;
console.log(`La nota corregida del primer alumno es: ${marks[0]}`);

// Añadir elementos al principio del array '[9, 4, 7, 8];' 
// El 10 del principio fue cambiado por el 9 con la variable de arriba
// Añadimos el número 3 al principio del array.... [3, 9, 4, 7, 8]
marks.unshift(3);
console.log(`Unshift`, marks);

// Eliminar el primer elemento del array '[4, 7, 8];' 
marks.shift();
console.log(`Shift:`, marks);

// Añadir un elemento al final del array
// marks.push(2);
// console.log(push);

// Eliminar un elemento al final del array
// marks.pop();
// console.log('Pop:', pop);

// Ordenar los valores del array en orden ascendente
marks.sort((a, b) => a - b);
console.log('Orden Ascendente', marks);


const fruits = ['kiwi', 'naranja', 'melón'];
const firstFruit = fruits.slice(0, 1) // Saca la primera posición que empieza en (0) y termina en (1) sin incluirlo
console.log(`El array con la primera fruta es:`, firstFruit);

// Copiar array completo
const copyFruits = fruits.slice()  // Al dejar en blanco el 'fruits.slice' copia el array completo
console.log('Copy fruits array', copyFruits);

// Hacer referencia a un array
const reassignedFruits = fruits;
reassignedFruits.push('platano');

console.log('Reassigned fruits:', reassignedFruits);
console.log('Fruits:', fruits);

/*
Esto añade un nuevo elemento(plátano) al array y modifica también el array original pero mantiene la copia intacta.
Copy fruits array [ 'kiwi', 'naranja', 'melón' ]
Reassigned fruits: [ 'kiwi', 'naranja', 'melón', 'platano' ]
Fruits: [ 'kiwi', 'naranja', 'melón', 'platano' ] 

Siempre se debe hacer una copia "copyFruits = fruits.slice()" del array y trabajar sobre ella para
mantener el array inicial como el original.
*/
