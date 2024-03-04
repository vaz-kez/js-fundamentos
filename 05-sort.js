// sort puede modificar la función original.
// Necesita  una copia de ella para no alterarla
// Ordena los valores mediante el formato unicaode

// Funciones SORT para números
const numbers = [1, 10, 3, 4, 5, 6];

const orderNumbersAscending = (a, b) => a - b;
const orderNumbersDescending = (a, b) => b - a;

numbers.sort(orderNumbersDescending);

// numbers.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }

//   if (a < b) {
//     return -1;
//   }

//   return 0;
// }
// );

console.log(numbers)

// Funciones SORT para texto
const names = ['pepe', 'Pepe', 'Ramon', 'juan', 'alberto'];

compareStringsAscending = (a, b) => a.localeCompare(b);
compareStringsDescending = (a, b) => b.localeCompare(a);

names.sort(compareStringsAscending);

// localeCompare es el idioma de donde se ejecuta el código. O del equipo o navegador

// names.sort((a, b) => {
//   return a.localeCompare(a);
// });

console.log(names);

const people = [
  { name: 'pepe', age: 28 },
  { name: 'Juan', age: 34 },
  { name: 'Ramon', age: 56 },
  { name: 'Alberto', age: 79 },
];

people.sort((a, b) => {
  return compareStringsAscending(a.name, b.name);
});

people.sort((a, b) => {
  return orderNumbersAscending(a.age, b.age);
});

console.log(people);


