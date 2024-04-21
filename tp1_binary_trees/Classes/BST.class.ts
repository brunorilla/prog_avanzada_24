import './BSTnode.class'
import {BstNode} from "./BSTnode.class";
import {performance} from 'perf_hooks';

export class BST {
  root: BstNode | null = null;


  private calculateHeight(node: BstNode | null): number {
    if (node === null) {
      return 0;
    } else {
      const leftHeight = this.calculateHeight(node.left);
      const rightHeight = this.calculateHeight(node.right);
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }

  insert(value: number, allowDuplicates: boolean = false) {
    const newNode = new BstNode(value);

    if (this.root === null) {
      this.root = newNode;
    } else if (allowDuplicates || !this.exists(this.root, value)) {
      this.insertNode(this.root, newNode);
    } else {
      console.log(`El valor ${value} ya existe en el árbol.`);
    }
  }

  private insertNode(node: BstNode, newNode: BstNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  getHeight(): number {
    const result = this.calculateHeight(this.root)
    console.log(`++++++++++\nLa altura del BST es: ${result}\n++++++++++`)
    return result
  }


  exists(node: BstNode | null, value: number, logPerformance: boolean = false): boolean {
    let startTime: number;

    if (logPerformance) {
      console.log('\n*********\nResultado de búsqueda de valor\n*********')
      startTime = performance.now();  // Iniciar timer
    }

    let result = false;
    while (node !== null) {
      if (value < node.value) {
        node = node.left;
      } else if (value > node.value) {
        node = node.right;
      } else {
        result = true;
        break;
      }
    }

    if (result && logPerformance) console.log(`El valor [${value}] se encontró en el BST`)
    if (!result && logPerformance) console.log(`El valor [${value}] no se encontró en el BST`)

    if (logPerformance) {
      const endTime = performance.now(); // finalizar timer
      console.log('·············')
      console.log(`Tiempo de búsqueda para ${value}: ${endTime - startTime} milisegundos`);
      console.log('·············')
    }

    return result;
  }

}
