
var age = 24
var canParticipate = false

if (age < 30) {
  canParticipate = true
}
console.log(`Puede participar el usuario? ${canParticipate}`)


// Renovar carnet de conducir según la edad



var yearsToRenew = 0;
var driverAge = 60;
//Cero no tiene valor = no tiene carnet = no es capaz de renovarlo

//18 o más, y 50 o menos => 10 
//más de 50 o menos o igual a 75 => 5
//más de 75 años => 1


if (driverAge >= 18 && driverAge <= 50) {
  yearsToRenew = 10;
}

if (driverAge > 50 && driverAge <= 75) {
  yearsToRenew = 5;
}

if (driverAge > 75) {
  yearsToRenew = 1;
}

console.log(`Se tiene que renovar el carnet cada ${yearsToRenew}`);



var myName = 'Evaristo';

if (myName === 'Marcos') {
  console.log('Eres el profe!')
} else {
  console.log('Eres un alumno!');
}




// Los condicionales deben estar ordenados de mayor a menor o viceversa para cumplir las variables
// && = AND = y  Operator
// OR = || Operator

var time = 9000
var record = ' '

if (time < 8000) {
  record = 'World record'
} else if (time < 10000) {
  record = 'Olimpic Record'
} else if (time < 12000) {
  record = 'Personal Best'
} else {
  record = 'Not Qualified'
}

console.log(`El record es: ${record}`);


var city = 'Madrid';
var hasCar = false;

if ((city === 'Madrid' || city = 'Barcelona') && hasCar === false) {
  console.log("Puede en metro");
}
if (city === 'Madrid' && hasCar === false) {
  console.log("Puede ir en coche o metro");
}
