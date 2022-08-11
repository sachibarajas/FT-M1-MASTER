'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let a=num.toString();
  let suma=0;
  for(let i=0; i<a.length; i++){
    suma=suma+Number(a[i])*(Math.pow(2,((a.length-1)-i)));
  }
  return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
  var nuevo=num;
  var i=0;
  var cadena='';
  while(nuevo>=1){
    cadena= Math.floor(nuevo%2)+cadena;
    nuevo=nuevo/2;
    i++;
  }
  return cadena;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}