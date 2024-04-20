import {BST} from './Classes/BST.class'
import {generateLargeDisorderedArray} from "./utils/arrayGenerators";

const largeArray = generateLargeDisorderedArray(150); // Generar un array de 150 números desordenados con uno repetido
console.log(largeArray);

const bst = new BST();
largeArray.forEach(value => {
  bst.insert(value);
});



// console.log(bst.getHeight())

//bst.inOrderTraverse();
