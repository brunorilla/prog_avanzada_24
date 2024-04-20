"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BST_class_1 = require("./Classes/BST.class");
var arrayGenerators_1 = require("./utils/arrayGenerators");
var largeArray = (0, arrayGenerators_1.generateLargeDisorderedArray)(150); // Generar un array de 150 números desordenados con uno repetido
console.log(largeArray);
var bst = new BST_class_1.BST();
largeArray.forEach(function (value) {
    bst.insert(value);
});
console.log(bst.getHeight());
//bst.inOrderTraverse();
