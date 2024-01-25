// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola. 

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

//---------------------------------------------------------


// 1.2 Cambia el primer elemento de avengers a "IRONMAN" 

const avengersEnd = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengersEnd[0] = "IRONMAN";

console.log(avengersEnd);

//---------------------------------------------------------


// 1.3 console numero de elementos en el array usando la propiedad correcta de Array.

const avengersGame = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log("Número de posiciones: ", avengersGame.length);

//---------------------------------------------------------


// 1.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push("Morty");
rickAndMortyCharacters.push("Summer");

const lastMark = rickAndMortyCharacters[rickAndMortyCharacters.length - 1];

console.log(rickAndMortyCharacters);
console.log(`El último personaje es:`, lastMark);
console.log(`El primer personaje es:`, rickAndMortyCharacters[0]);

//---------------------------------------------------------


// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola. 

const rickAndMortyFakeCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

console.log('Número de personajes:', rickAndMortyFakeCharacters.length);
length = rickAndMortyFakeCharacters.length

let removedCharacter = rickAndMortyFakeCharacters.pop(6);
console.log(removedCharacter);

console.log(rickAndMortyFakeCharacters[0], lastMark);

//---------------------------------------------------------


// 1.6 Elimina el segundo elemento del array y muestra el array por consola.

const rickAndMortyCartoonCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCartoonCharacters.splice(1, 2); // La segunda cifra indica la posición que se elimina

console.log('Eliminar segundo elemento:', rickAndMortyCartoonCharacters);

//---------------------------------------------------------