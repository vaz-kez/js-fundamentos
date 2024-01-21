// Objetos y Funciones

const person = {
  name: 'Marcos',
};

const vehicles = [
  {
    model: 'Seat Ibiza',
    capacity: 5,
    favourite: false,
  },
  {
    model: 'Mercedes Vito',
    capacity: 8,
    favourite: false,
  },
  {
    model: 'Kawasaki Ninja',
    capacity: 2,
    favourite: true,
  },
];

const getMaxCapacityFromVehicles = (vehicles) => {
  let maxCapacity = 0;

  for (let i = 0; i < vehicles.length; i++) {
    const vehicle = vehicles[i];

    if (vehicle.capacity > maxCapacity) {
      maxCapacity = vehicle.capacity;
    }
  }

  return maxCapacity;
};


const getFavouriteVehicles = (vehicles) => {
  for (let i = 0; i < vehicles.length; i++) {
    const vehicle = vehicles[i];

    if (vehicle.favourite === true) {
      return vehicle;  // Este return corta el bucle y la función al completo
    }
  }
}


// El bucle 'for' recorre el array
/* 
Creamos la constante 'vehicle' que sale de la constante 'vehicles' en la posición [i] 
que sería cada uno de los modelos
*/
let maxCapacity = 0;

for (let i = 0; i < vehicles.length; i++) {
  const vehicle = vehicles[i];

  if (vehicle.capacity > maxCapacity) {
    maxCapacity = vehicle.capacity;
  }
}

for (let i = 0; i < vehicles.length; i++) {
  const vehicle = vehicles[i];

  if (vehicle.favourite === true) {
    person['vehicle'] = vehicle;
  }
}


console.log(`En mis vehículos tengo una capacidad máxima de ${maxCapacity} personas`);

console.log(`La persona tiene estos valores`, person);

/* Resultado:
  La persona tiene estos valores {
  name: 'Marcos',
  vehicle: { model: 'Kawasaki Ninja', capacity: 2, favourite: true } 
*/