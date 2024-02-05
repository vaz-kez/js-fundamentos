
//Crea una función que reciba por parámetro un array y compruebe si existen 
//elementos duplicados, en caso que existan los elimina para retornar un array
// sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = ['sushi', 'pizza', 'burger', 'potatoe', 'pasta', 'ice-cream', 'pizza', 'chicken',
  'onion rings', 'pasta', 'soda'];

function removeDuplicates(param) {
  const newArray = [];
  for (let i = 0; i < param.length; i++) {
    if (newArray.includes(param[i])) {
      newArray.push(param[i]);
    }
  }
  return newArray;
}
console.log(removeDuplicates(duplicates));
