'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
    if (n===1 || n===0){
    return 1;
  }else{
    return n*nFactorial(n-1);
  }
}

function nFibonacci(n) {
  if (n===0){
    return 0;
  }else if(n===1){
    return 1;
  }else{
    return nFibonacci(n-1)+nFibonacci(n-2);
  }
}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue(){
class Node{
  constructor(data){
    this.data = data;
    this.next = null;
    }
  }
class Queue{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.size = 0
    }
    enqueue(valor){
      var newNode= new Node(valor);
      if (this.size===0){
        this.top=newNode;
        this.bottom=newNode;
      }else{
        var currentBottom=this.bottom;
        this.bottom=newNode;
        currentBottom.next=this.bottom
      }
      this.size++;
    }
    dequeue(){
      if (this.size===0){
        return undefined;
      }else if(this.size===1){
        this.top=null;
        this.bottom=null;
      }else{
        this.top=this.top.next;
      }
      this.size--;
    }
    size(){
      return this.size;
    }
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
