// REVERSE da la vuelta a un array
// No recibe parámetros ()
// Modifica el elemento original por lo que se debe hacer una copia 

const people = [
  { name: 'A', age: 20 },
  { name: 'B', age: 30 },
  { name: 'C', age: 45 },
  { name: 'D', age: 52 },
];

const reversedPeople = people.slice().reverse();

console.log(`Reversed people`, reversedPeople); // De fin a principio
console.log(`People`, people);