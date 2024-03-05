// FIND encuentra un elemento dentro de un array. Si no lo encuentra devuelve 'undifined'
// Si el elemento está repetido dentro del array, solo encuentra el primero

//const fridgeFood = ['soup', 'burger', 'lettuce', 'chicken'];
const fridgeFood = [{ foof: 'soup', id: '1' },
{ food: 'burger', id: '2' },
{ food: 'lettuce', id: '3' },
{ food: 'chicken', id: '4' },
{ food: 'burger', id: '5' },
];

const foodToEat = fridgeFood.find((food, index) => {
  if (food.food === 'burger') {
    return true;
  }
});
console.log(fridgeFood);
console.log(foodToEat.food, foodToEat.id);


///////////////////////////////////////////////

// .SOME nos dice si existe el elemento

const people = [
  { name: 'A', age: 11 },
  { name: 'B', age: 22 },
  { name: 'C', age: 33 },
  { name: 'D', age: 44 },
];

const hasPersonOver30 = people.some((person, index) => person.age > 30);
console.log(hasPersonOver30);

// const hasPersonOver30 = people.some((person) => {
//   if (person.age > 30) {
//     return true;
//   }
// });


// const hasPersonOver30 = (peopleArr) => {
//   const peopleArr = peopleArr.find((person) => {
//     if (person.age > 30) {
//       return true;
//     }
//   });
//   return !!personOver30;
// };
// console.log(personOver30);

