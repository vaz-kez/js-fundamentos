// Bucle / Loop 'for'

// loop 'for' ..... son TRES cosas separades por 'punto' y 'coma'
// Se decide un valor máximo que queremos alcanzar
// i++ ..... i = i + 1... i += 1 Son las tres variables iguales y nos permite sumar 1 en cada vuelta

// for (VALOR INICIAL; COMPARACIÓN; OPERACIÓN TRAS CADA LOOP) {
// CONTENIDO
// }

for (var i = 0; i < 5; i++) {
  console.log(`El valor de i es: ${i}`);
}

console.log(`-----------------------------`)

for (var y = 0; y < 50; y = y + 7) {
  console.log(`El valor de y es: ${y}`);
}

console.log(`-----------------------------`)


// // i++ ..... i = i + 1... i += 1 Son las tres variables iguales y nos permite sumar 1 en cada vuelta
// // j empieza valiendo 10; como j es >=0 se cumple la función anterior, entonces j-- resta 1 por vuelta desde 10 (j=10) hasta llegar a 0 (j>=0)

for (var j = 10; j >= 0; j = j - 1) {
  console.log(`J será igual a: ${j}`)
}

console.log(`-----------------------------`)

// // Empieza a bajar desde 50; hasta llegar a 10; En cada vuelta resta 11;

for (var w = 50; w >= 10; w -= 11) {
  console.log(`W será igual a: ${w}`)
}


// console.log(sentence.length)  // Longitud de la variable sentence 24
// i < sentence.length => porque sentence tiene 24 posiciones empezando desde cero, es decir, desde 0 hasta 23
// if (sentence[i] === 'a') Si dentro de sentence con la posición que tenga el valor 'i' tengo la letra "a"
// timesRepeated += 1;  contará uno de cada vez que encuentre el valor de 'i' === "a"
// Este código da vueltas alrededor de una cadena de texto entrando en la posición que le demos a 'i' (sentence[i]=== 'a')...
// comprueba la longitud para no pasarse (i < sentence.length) y nos saca el número de veces que se repite


var timesRepeated = 0;
var sentence = 'La programación me gusta'

for (i = 0; i < sentence.length; i++) {
  if (sentence[i] === 'a') {
    timesRepeated += 1;
  }
}
console.log(`La letra "a" se ha repetido ${timesRepeated} veces`)
//La letra "a" se ha repetido 4 veces

console.log(`--------------------------------------------------------`)

var timesRepeated = 0;
var sentence = 'Tres tristes tigres comen trigo en un trigal'

for (i = 0; i < sentence.length; i++) {
  if (sentence[i] === 'r') {
    timesRepeated += 1;
  }
}
console.log(`La letra "r" se ha repetido ${timesRepeated} veces`)
// La letra "r" se ha repetido 5 veces

