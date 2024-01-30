/* 
Buscar la palabra más larga.
Completa la función que tomando un array de strings como argumento 
devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
*/

function stringMaxLength(strings) {
  let long = strings[0];
  let longestWord = '';

  for (let i = 0; i < strings.length; i++) {

    if (strings[i].length > long.length) {
      longestWord = strings[i];
    }
  }
  return longestWord
}

console.log(stringMaxLength(['armario', 'perro', 'elefante', 'ballenato']));
