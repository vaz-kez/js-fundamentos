
// Calcular promedio de strings: Crea una función que reciba por parámetro un array 
// y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. 

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function calculatePromedio(param) {
  let sumNumbers = 0;
  let countStrings = 0;
  for (i = 0; i < param.length; i++) {
    if (typeof param[i] == 'number')
      sumNumbers += param[i];
    else {
      countStrings++;
    }
  }
  const calculatePromedio = (sumNumbers + countStrings)
  return calculatePromedio;
}
console.log(calculatePromedio(mixedElements));
