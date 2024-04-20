import './BSTnode.class'
import {BstNode} from "./BSTnode.class";
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
  insert(value: number) {
    const newNode = new BstNode(value);

    if (this.root === null) {
      this.root = newNode;
    } else if (!this.exists(this.root, value)) {
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
    return this.calculateHeight(this.root);
  }



  exists(node: BstNode | null, value: number): boolean {
    if (node === null) {
      return false;
    } else if (value === node.value) {
      return true;
    } else if (value < node.value) {
      return this.exists(node.left, value);
    } else {
      return this.exists(node.right, value);
    }
  }

  inOrderTraverse(node: BstNode | null = this.root): void {
    if (node !== null) {
      this.inOrderTraverse(node.left);
      console.log(node.value);
      this.inOrderTraverse(node.right);
    }
  }
}
