var trueVar = true;
console.log(trueVar);
// True

trueVar = false;
console.log(trueVar);
// False

console.log('Igual doble solo numbers: ' + (5 == 5));
console.log('Igual doble con string y number: ' + ('5' == 5));
// Igual doble: true
// El == (igual doble) compara que el valor sea igual sin importar el tipo de variable
// Los paréntesis tienen preferencia sobre el +

console.log('Igual triple solo numbers: ' + (5 === 5)); // Igual triple solo numbers: true
console.log('Igual triple con string y number: ' + ('5' === 5)); // Igual triple con string y number: false
// El === (igual triple) compara el valor teniendo en cuenta el tipo de variable

console.log('Es 2 mayor que 3? ' + (2 > 3)); //False
console.log('Es 3 mayor que 2? ' + (3 > 2)); //True

console.log('Es 3 mayor o igual que 3? ' + (3 >= 3)); // True
console.log('Es 3 mayor o igual que 3? ' + (3 >= Number(3))); //True (Number(3) hace comparar la igualación triple)


var isSameName = 'juan' === 'Juan'
console.log('Son el mismo nombre? ' + isSameName); //False

var isSameName = 'juan'.toUpperCase() === 'Juan'.toUpperCase() // Convierte los nombres a mayúsculas
console.log('Son el mismo nombre? ' + isSameName); //True

//Truthy
console.log('Es 2 truthy? ' + Boolean(2)); // True
console.log('Es PMBA truthy? ' + Boolean('PMBA')); // True
console.log('Es true truthy? ' + Boolean(true)); // True 
// Boolean convierte el valor en true

//Falsy
console.log('Es 0 falsy? ' + Boolean(0)); // False  //El número 0 no representa valor
console.log('Es un string vacío falsy? ' + Boolean(' ')); // False // Un string vacío no contiene valor. Está vacío

