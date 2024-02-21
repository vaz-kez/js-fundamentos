// Array.filter

const animals = ['🐄', '🐥', '🐼', '🦁'];
// const herbAnimals = [];

// for (let i = 0; i < animals.length; i++) {
//   const animal = animals[i];

//   if (animal === '🐄' || animal === '🐼') {
//     herbAnimals.push(animal);
//   }
// }

const herbAnimals = animals.filter((animal) => {
  //const isHerbAnimal = animal === '🐼' || animal === '🐄';
  //return isHerbAnimal;
  return animal === '🐄' || animal === '🐼';
}
);

console.log(`Los animales hervíboros son: ${herbAnimals}`);

