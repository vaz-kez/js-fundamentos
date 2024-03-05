// IndexOf indica en que posición(índice) se encuentra el elemento y solo devuelve el primero que encuentra.

const animals = ['dog', 'bull', 'cat', 'chick', 'bull']

const indexOfBull = animals.indexOf('bull');
console.log(`El primer toro está en el índice`, indexOfBull);

// lastIndexOf empieza a contar por el final
const lastIndexOfBull = animals.lastIndexOf('bull');
console.log(`El último toro está en el índice`, lastIndexOfBull);


const people = [
  { name: 'A', age: 20 },
  { name: 'B', age: 30 },
  { name: 'C', age: 45 },
  { name: 'D', age: 52 },
  { name: 'C', age: 48 },
  { name: 'E', age: 38 },
  { name: 'C', age: 49 },
];

const index = people.findIndex((person) => {
  if (person.name === 'C' && person.age >= 45 && person.age <= 50) {
    return true;
  }
});

console.log(`La persona está en la posición`, index);
console.log(`La perona es`, people[index]);

// Si no encuentran el elemento se devuelve -1  