// Array.map

const animals = ['🐼', '🦦', '🐸'];

const getAnimalFood = (animal) => {
  let food;

  if (animal === '🐼') {
    food = 'bambú'
  } else if (animal === '🦦') {
    food = 'fish'
  } else if (animal === '🐸') {
    food = 'insects';
  }
  return food;
}

const animalFood = animals.map((animal) => {
  const food = getAnimalFood(animal);
  return food;
});

console.log(animalFood)

