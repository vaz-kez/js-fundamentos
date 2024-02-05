/*
Buscador de nombres: Crea una función que reciba por parámetro un array 
y el valor que desea comprobar que existe dentro de dicho array - 
comprueba si existe el elemento, en caso que existan nos devuelve un true 
y la posición de dicho elemento y por la contra un false.
*/

const nameFinder = ['Peter', 'Steve', 'Tony', 'Natasha', 'Clint',
  'Logan', 'Xabier', 'Bruce', 'Peggy', 'Jessica', 'Marc'
];
function finderName(param) {
  let namesArray = param;
  const valueToSearch = 'Marc';

  if (namesArray.includes(valueToSearch)) {
    console.log(`El nombre ${valueToSearch} se encuentra en el índice ${namesArray.indexOf(valueToSearch)}`);

    return [true, namesArray.indexOf(valueToSearch)];
  } else {
    console.log('No se ha encontrado el nombre');

    return [false];
  }
}
finderName(nameFinder);