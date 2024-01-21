// Objetos

const person = {
  name: "Marcos",
  surname: 'Vázquez'
};

// const personName = person['name'];
const personName = person.name;  // Se utiliza este formato siempre que ya sepamos el nombre
// console.log(`Èl nombre es: ${person.name} ${person.surname}`);
console.log(person.name, person.surname)

person['age'] = 30,
  console.log(`La persona tiene: ${person.age} años`);

// Creamos el valor city e immediatamente lo borramos
// El resultado será 'undefined'  
person['city'] = 'Madrid';
delete person['city'];
console.log(person.city)

// Reescribir claves con el mismo nombre
// La última clave es la que persiste
// Resultado: Ahora la persona vive en Cadiz
person['city'] = 'Madrid';
console.log(`Ahora la persona vive en ${person.city}`);
person['city'] = 'Cadiz';
console.log(`Ahora la persona vive en ${person.city}`);


//////////////////////////////////////////////
// Clave dinámica

function getKey(object, key); { }

const dynamicName = getKey(person, 'name');  // Object-person key-'name'
const dynamicSurname = getKey(person, 'surname');
console.log(`Las claves dinámicas valen: ${dynamicName} ${dynamicSurname}`);
