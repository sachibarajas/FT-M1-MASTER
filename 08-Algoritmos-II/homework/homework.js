'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  if(array.length<=1) return array;
  let pivotIndex = getRandomIntInclusive(0,array.length-1)
  let pivote = array[pivotIndex];
  let menor = [];
  let mayor = [];
  
  for (let i=0 ; i<array.length; i++){
    if (i===pivotIndex) continue;
    if(array[i]<pivote){
      menor.push(array[i]);
    }else {
      mayor.push(array[i]);
    }
  }
 
  return quickSort(menor).concat([pivote], quickSort(mayor));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length===1) return array;
  let division = split(array);
  let left = division[0];
  let right = division[1];
  return paste(mergeSort(left), mergeSort(right));
  
  
}
function split(array){
  let mitad = Math.floor(array.length/2);
  let left = array.slice(0, mitad);
  let right = array.slice(mitad);
  return [left,right];
}

function paste(left, right){
  let array = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while(leftIndex<left.length && rightIndex<right.length){
    if(left[leftIndex] < right[rightIndex]){
      array.push(left[leftIndex]);
      leftIndex++;
    } else {
      array.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return array.concat(left.slice(leftIndex), right.slice(rightIndex));
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
