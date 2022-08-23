"use strict";

const eleventyNavigation = require("@11ty/eleventy-navigation/eleventy-navigation");

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus 
    variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order").
    Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del
  directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
  this.numNodes = 1;
}

BinarySearchTree.prototype.size = function(){
  return this.numNodes;
}

BinarySearchTree.prototype.insert = function(nuevo){
  let newNode = new BinarySearchTree(nuevo);
  if (nuevo <= this.value){
    if (this.left === null){
      this.left = newNode;
    } else{
      this.left.insert(nuevo);
    }
  }
  if (nuevo > this.value){
    if (this.right === null){
      this.right = newNode;
    } else{
      this.right.insert(nuevo);
    }
  }
 this.numNodes++;
 return nuevo;
}

BinarySearchTree.prototype.contains = function(value){
  if (value === this.value){
    return true;
  }
  if (value <= this.value && this.left != null){
    return this.left.contains(value);
  }else if(value > this.value && this.right != null){
    return this.right.contains(value);
  } else{
    return false;
  }
}
BinarySearchTree.prototype.depthFirstForEach = function(cb, orden){
  if (orden === 'post-order') {
    if (this.left !== null) this.left.depthFirstForEach(cb, orden);
    if (this.right !== null) this.right.depthFirstForEach(cb, orden);
    cb(this.value);
  }
  else if (orden === 'pre-order') {
    cb(this.value);
    if (this.left !== null) this.left.depthFirstForEach(cb, orden);
    if (this.right !== null) this.right.depthFirstForEach(cb, orden); 
  }
  else{
    if (this.left !== null) this.left.depthFirstForEach(cb, orden);
    cb(this.value);
    if (this.right !== null) this.right.depthFirstForEach(cb, orden); 
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function(cb, queue=[]){
  
  if(this.left !== null){
    queue.push(this.left);
  }
  if (this.right !== null){
    queue.push(this.right);
  }
  cb(this.value)

  if(queue.length>0){
    queue.shift().breadthFirstForEach(cb, queue);
  }
  
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
