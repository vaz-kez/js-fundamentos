var myName = 'Marcos';

// Esta funcion cambia el valor de la variable 'myName' arriba expuesta
function changeMyName(newName) {
  myName = newName;
}

function sayMyName() {
  console.log(`Mi nombre es ${myName}`);
}

// Esta función recibe el 'newName' que es 'Manuel' y asigna a 'myName' el valor de 'Manuel'
changeMyName('Manuel');
sayMyName(); // Resultado en terminal: Mi nombre es Alberto

/* Cuando utilizamos una constante ('const') no podemos cambiar el valor de la variable. ERROR
const myName = 'Marcos';
myName = 'Juan'; // ERROR, porque myName ya fue asignado como Marcos */

/* La solución a este problema es la siguiente:
- utilizar 'let'..... let myName = 'Marcos';
'let' solo se utiliza cuando tengamos que cambiar el valor de una variable */
// Es recomendable utilizar siempre 'const' y 'let' para tener un código más limpio y ordenado
// let es para reasignar valor
// const es para no reasignar valor. Se crea un valor constante

let i = 10;  // Scope global

for (let i = 0; i < 5; i++) {
} // Scope local

console.log(i);
// Resultado: 10





