'use strict'
// No cambies los nombres de las funciones.

function factorear(num,array=[],primos=[2,3,5,7,11,13,17,19,23,29,31,37,41]) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  if(num === 1) {
    array.unshift(1);
    return array;
  }
  for(let i=0; primos.length; i++){
    if(num % primos[i]=== 0){
      array.push(primos[i]);
      return factorear(num/primos[i], array, primos);
    }
  }

  // if(num === 1) {
  //   array.unshift(1);
  //   return array;
  // }
  // if (num % 2 === 0) {
  //   array.push(2);
  //   return factorear(num/2,array)
  // }
  // if (num % 3 === 0) {
  //   array.push(3);
  //   return factorear(num/3,array)
  // }
  // if (num % 5 === 0) {
  //   array.push(5);
  //   return factorear(num/5,array)
  // }
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for(let j=0; j<array.length; j++){
    for(let i = 0; i<array.length; i++){
      let aux=0;
      if(array[i]>array[i+1]){
        aux=array[i];
        array[i]=array[i+1];
        array[i+1]= aux;
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
    let aux = 0;
  for (let i = 1; i<array.length; i++){
    aux = array[i];
    for(var j = i-1; j>=0; j--){
      if (array[j]>=aux){
        array[j+1]=array[j];
      }else break;
    }
    array[j+1] = aux;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  

  for(let i = 0; i<array.length; i++){
    var menor = array[i];
    var indexMenor = i;
    for(var j=i+1; j<array.length; j++){
      if(array[j] < menor){
        menor = array[j];
        indexMenor = j;
      }
    }
    array[indexMenor] = array[i]  
    array[i] = menor;
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
