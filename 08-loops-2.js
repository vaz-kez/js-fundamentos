

var count = 0;                              // donde empieza la cuenta

while (count <= 10) {                       // donde termina
  console.log(`La cuenta va por ${count}`)
  count += 3;                                  // la suma de cada vuelta (sin esto el bucle sería infinito y bloquea el equipo) 
}
// count++; count += 1; count = count + 1; son todos lo mismo 

console.log(`-------------------------------`)

///////////////////////////////////////////////////////////////////////////////////////////////////

var negativeCount = 100;

while (negativeCount >= 0) {
  console.log(`La cuenta negativa va por ${negativeCount}`)

  negativeCount -= 19;
}

console.log(`-------------------------------`)

/////////////////////////////////////////////////////////////
// Las dos siguientes variables son iguales. Utilizamos 'while' y 'for'

var timesRepeated = 0;
var sentence = 'Tres tristes tigres comen trigo en un trigal'
var i = 0;

while (i < sentence.length) {    // Mientras que 'i' se compruebe solo dentro de la frase
  if (sentence[i] === 'r') {     // Y la variable 'i' se sustituya por la letra 'r'
    timesRepeated += 1;          // Se contará una vez cada letra 'r' encontrada
  }
  i++;                           // Esto es la suma de cada vuelta para que el bucle tenga un fin
}
console.log(`La letra "r" se ha repetido ${timesRepeated} veces`)
// La letra "r" se ha repetido 5 veces

console.log(`-------------------------------`)

var timesRepeated = 0;
var sentence = 'Tres tristes tigres comen trigo en un trigal'

for (i = 0; i < sentence.length; i++) {
  if (sentence[i] === 'r') {
    timesRepeated += 1;
  }
}
console.log(`La letra "r" se ha repetido ${timesRepeated} veces`)
// La letra "r" se ha repetido 5 veces