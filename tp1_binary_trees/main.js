"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BST_class_1 = require("./Classes/BST.class");
var arrayGenerators_1 = require("./utils/arrayGenerators");
// 1) Creo un nuevo BST a partir de mi clase:
var bst = new BST_class_1.BST();
// Array desordenado de 150 items:
var largeDisorderedArray = (0, arrayGenerators_1.generateConstrainedDisorderedArray)(150, 1); // Generar un array de 150 números desordenados con uno repetido
console.log("Muestra desordenada: \n ".concat(largeDisorderedArray, " \n"));
//2)  Inserto los valores del array en el BST
largeDisorderedArray.forEach(function (value) {
    bst.insert(value, true);
});
// 3)  Obtener la altura del Binary Search Tree
console.log("3)  Obtener la altura del Binary Search Tree");
bst.getHeight();
// 4) Determino el tiempo que le lleva la búsqueda de un elemento no existente:
console.log(" 4) Determino el tiempo que le lleva la búsqueda de un elemento no existente:");
bst.exists(bst.root, 84, true);
// 5) Inserto la misma muestra de modo ordenado y hago la búsqueda de un elemento no existente:
// A) Ordeno la muestra:
var orderedArray = (0, arrayGenerators_1.sortArray)(largeDisorderedArray);
console.log("Muestra anterior ordenada: ".concat(orderedArray));
// Creo un nuevo BST e inserto la muestra ordenada
var bst2 = new BST_class_1.BST();
orderedArray.forEach(function (value) {
    bst2.insert(value, true);
});
// B)
console.log("Busco un elemento no existente de la muestra ordenada y logueo el tiempo de búsqueda");
bst2.exists(bst2.root, 1400, true);
