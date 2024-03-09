// REDUCE
// Puede imitar cualquier  función de reducción en JavaScript

const numbers = [1, 2, 3, 4, 5];

// let sum = 0;
// numbers.forEach((number) => {
//   sum += number;
// });


// acc (accumulator).....los valores anteriores acumulados(sumados....eje: 1 2_3 3_6 4_10 5)
// next (también puede ponerse la constante, en este caso es number)
// Para que el array sume los valores se debe establecer un return

const sum = numbers.reduce((acc, next) => {
  console.log(acc, next);

  return acc + next;
}, 0);
// este cero será el primer elemento que el array utilice para la fucnión
console.log(sum);



const words = ['Hola', 'que', 'tal', '?'];

const sentence = words.reduce((acc, next) => {
  console.log(acc, next);

  return `${acc} ${next}`;
  // concatenando  las palabras con espacio entre ellas
});

console.log(sentence);


const animals = [
  { icon: '🐼', herb: true },
  { icon: '🐥', herb: false },
  { icon: '🐄', herb: true },
  { icon: '🦁', herb: false },
];

// const herbAnimals = animals.filter(animal => animal.herb)

const herbAnimals = animals.reduce((acc, next) => {
  console.log(acc, next);

  if (next.herb) {
    acc.push(next);
  }

  return acc;
}, []); // esto es para que acc inicie cada vuelta con el array original eje: icon 

console.log(herbAnimals)