// // Promesas


// const MyName = 'Marcos'
// console.log(`Mi nombre es: ${MyName}`);

// /* 
// Esta promesa se ejecutará al final del código
// Lo que se ejecuta de esta promesa será la resolución o el fallo
// La promesa tiene que ejecutar 'Resolve' o 'Reject'
// 'Resolve' ... resuelve la promesa, la asigna as un valor y se trabajará con ese valor
// 'Reject' .... hace que la promesa explote y que el código explote......pero podemos trabajar con ese ERROR.
// */
// const promise = new Promise((resolve, reject) => {
//   console.log('Ejecutando promesa');

//   //resolve('Resuelta');
//   reject('Promesa rota');
// });
// //Para resolve
// //Termina la promesa
// promise.then((value) => {
//   console.log(`Promesa resuelta correctamente con el valor:`, value);;
// });

// //Para reject
// //Termina la promesa
// promise.catch((error) => {
//   console.log(error);
// })

// console.log(promise);

// console.log('Este código se ejecuta antes que la promise');

///////////////////////////////////////////////////////////////////

const getAmountInBank = () => {
  const promise = new Promise((resolve, reject) => {
    //resolve(1000000);
    reject('Servidor no disponible');
  });

  return promise;
};

getAmountInBank()
  .then((amount) => {
    console.log(`Tenemos ${amount}`);

    return `La cantidad es: ${amount}`;
  })
  .then((message) => {
    console.log('Esto es el segundo then');
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });
//Siempre se debe concatenar 'then' y 'catch'
//Y se pueden poner tantos 'then' como queramos