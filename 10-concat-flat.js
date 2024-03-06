// CONCAT fusiona un array con otro array

const animals = ['dog', 'bull', 'cat', 'chick',];
const newAnimals = ['fish', 'elephant'];


// newAnimals.forEach((animal) => {
//   animals.push(animal);
// });

const updatedAnimals = animals.concat(newAnimals)

console.log(updatedAnimals);
// Output: ["dog", "bull", "cat", "chick","fish", "elephant"]


//////////////////////////////////////////////////////////

// Array FLAT
// FLAT  convierte todos los sub-arrays en un solo array, sin mantener la estructura de sub-arrays

const batchOfAnimals = [
  ['dog', 'worn'],
  ['cat', 'lion'],
  ['fish', 'whale']
];

// batchOfAnimals.forEach((batch) => {
//   batch.forEach((animal) => {
//     animals.push(animal);
//   });
// });

const fullAnimalList = batchOfAnimals.flat();

// const fullAnimalList = animals.concat(batchOfAnimals.flat());
// Fusiona  el array principal y el sub-array

console.log(fullAnimalList);
/* Output: ["dog", "worn", "cat", "lion", "fish", "whale"] */
