// ForEach

const numbers = [1, 4, 6, 3, 2, 1, 0, 9];

let count = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 3) {
//     count += 1;
//   }
// }

numbers.forEach((number) => {
  if (number > 3) {
    count += 1;
  }
});
console.log(`La cuenta vale: ${count}`);

/////////////////////////////////////////////////////////////

let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}
console.log(evenNumbers);

////////////////////////////////////////////////////////////

numbers.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  } else {
    oddNumbers.push(number)
  }
});
console.log('Even:', evenNumbers);
console.log('Odd:', oddNumbers);

////////////////////////////////////////////////
console.log('------------------------------')

numbers.forEach((number) => {
  number % 2 === 0
    ? evenNumbers.push(number)
    : oddNumbers.push(number);
});

console.log('Even:', evenNumbers);
console.log('Odd:', oddNumbers);

console.log('------------------------------')
// Para que el código sea más limpio y legible

const setNumberOddOrEven = (number) => {
  number % 2 === 0 ? evenNumbers.push(number) : oddNumbers.push(number);
}

numbers.forEach(setNumberOddOrEven);

console.log('Even:', evenNumbers);
console.log('Odd:', oddNumbers);