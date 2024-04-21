import {BST} from './Classes/BST.class'
import {generateConstrainedDisorderedArray, generateOrderedArray, sortArray} from "./utils/arrayGenerators";

// 1) Creo un nuevo BST a partir de mi clase:
const bst = new BST();


// Array desordenado de 150 items:
const largeDisorderedArray = generateConstrainedDisorderedArray(150, 1); // Generar un array de 150 números desordenados con uno repetido
console.log(`Muestra desordenada: \n ${largeDisorderedArray} \n`)


//2)  Inserto los valores del array en el BST
largeDisorderedArray.forEach(value => {
  bst.insert(value, true);
});


// 3)  Obtener la altura del Binary Search Tree
console.log("3)  Obtener la altura del Binary Search Tree")
bst.getHeight()

// 4) Determino el tiempo que le lleva la búsqueda de un elemento no existente:
console.log(" 4) Determino el tiempo que le lleva la búsqueda de un elemento no existente:")
bst.exists(bst.root, 84, true)


// 5) Inserto la misma muestra de modo ordenado y hago la búsqueda de un elemento no existente:
// A) Ordeno la muestra:
const orderedArray = sortArray(largeDisorderedArray)
console.log(`Muestra anterior ordenada: ${orderedArray}`)
// Creo un nuevo BST e inserto la muestra ordenada
const bst2 = new BST()
orderedArray.forEach(value => {
  bst2.insert(value,true );
});

// B)
console.log("Busco un elemento no existente de la muestra ordenada y logueo el tiempo de búsqueda")
bst2.exists(bst2.root, 1400, true)


