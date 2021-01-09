let chris = {};

/*For Each */
chris.each = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

/* Filter*/
chris.filter = (array, callback) => {
  let data = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      data.push(array[i]);
    }
  }
  return data;
};

/*findIndex*/
chris.findIndex = (array, callback) => {
  let num = undefined;

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      num = i;
      break;
    }
  }
  return num;
};

/*Find */
chris.find = (array, callback) => {
  let data = {};

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      data = array[i];
      break;
    }
  }

  return data;
};

/*Map*/
chris.map = (array, callback) => {
  let data = [];

  for (let i = 0; i < array.length; i++) {
    data.push(callback(array[i]));
  }
  return data;
};

/*Erick este metodo no funciona, tiene lo mismo del siguiente que si funciona, me da error me imagino que es por algo del scope al ser array funcion no tiene acceso a la propiedad arguments*/
// chris.contains = (array, value) => {
//   if (arguments.length === 2) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === value) {
//         return true;
//       }
//     }
//   } else if (arguments.length === 3) {
//     for (let i = arguments[2]; i < array.length; i++) {
//       if (array[i] === value) {
//         return true;
//       }
//     }
//   }

//   return false;
// };

/*Contains:...........Aqui lo volvi a hacer y si me funciona creando una declaracion no una expresion de funcion si me deja acceder a la propiedad arguments */
function myContains(array, value) {
  if (arguments.length === 2) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return true;
      }
    }
  } else if (arguments.length === 3) {
    for (let i = arguments[2]; i < array.length; i++) {
      if (array[i] === value) {
        return true;
      }
    }
  }

  return false;
}

/*Pluck */
chris.pluck = (array, nameProperty) => {
  let data = [];

  for (let i = 0; i < array.length; i++) {
    data.push(array[i][nameProperty]);
  }

  return data;
};

/*WITHOUT*/
/* esta funcion no pude realizarla con un array funcion porque no me deja acceder a la propiedad arguments*/
/*Lo hice con una declaracion de funcion*/
function myWithout(array, values) {
  let data = [];

  if (arguments.length === 2) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== values) {
        data.push(array[i]);
      }
    }
  } else if (arguments.length > 2) {
    let arrArguments = [];
    for (let i = 1; i < arguments.length; i++) {
      arrArguments.push(arguments[i]);
    }

    console.log(arguments.length);
    console.log(arrArguments);
    console.log(array);
    let cont = 0;
    for (let i = 0; i < array.length; i++) {
      cont = 0;
      for (let j = 0; j < arrArguments.length; j++) {
        if (array[i] === arrArguments[j]) {
          cont++;
        }
      }
      /*si el resultado no es igual, cont va a ser 0, entonces podemos aumentar este valor al array a retornar con un push, esto lo hacemos fuera del segundo for xq si no se revisaria cada dato tres veces y teandriasmos muchos datos replicados en el array*/
      if (cont === 0) {
        data.push(array[i]);
      }
    }
  }

  return data;
}

let arr = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50];
let obj = [
  { name: "carlos", age: 20 },
  { name: "yony", age: 50 },
  { name: "paula", age: 15 },
];

let datos = myWithout(arr, 1, 2, 4, 20, 50);

console.log(datos);
