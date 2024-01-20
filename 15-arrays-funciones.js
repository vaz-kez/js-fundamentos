// Arrays & Functions

// Calcular la media de una colección de notas

const getAverage = (scores) => {
  let sum = 0;

  for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    sum = sum + score;
    // sum += score;
  }
  return sum / scores.length;
};

const marks = [10, 4, 7, 8];
const average = getAverage(marks);
console.log(`The average is: ${average}`);

/////////////////////////////////////////////////////////

// Filtrar los números que sean pares

// Números pares = evenNumbers
// % = resto de una división

const getEvenNumbers = (numbers) => {
  const evenNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }

  return evenNumbers;
}

const evenNumbers = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(`Los números pares son:`, evenNumbers);
// Resultado de invocar a la función con ciertos números
