"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BST = void 0;
require("./BSTnode.class");
var BSTnode_class_1 = require("./BSTnode.class");
var BST = /** @class */ (function () {
    function BST() {
        this.root = null;
    }
    BST.prototype.calculateHeight = function (node) {
        if (node === null) {
            return 0;
        }
        else {
            var leftHeight = this.calculateHeight(node.left);
            var rightHeight = this.calculateHeight(node.right);
            return Math.max(leftHeight, rightHeight) + 1;
        }
    };
    BST.prototype.insert = function (value) {
        var newNode = new BSTnode_class_1.BstNode(value);
        if (this.root === null) {
            this.root = newNode;
        }
        else if (!this.exists(this.root, value)) {
            this.insertNode(this.root, newNode);
        }
        else {
            console.log("El valor ".concat(value, " ya existe en el \u00E1rbol."));
        }
    };
    BST.prototype.insertNode = function (node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    };
    BST.prototype.getHeight = function () {
        return this.calculateHeight(this.root);
    };
    BST.prototype.exists = function (node, value) {
        if (node === null) {
            return false;
        }
        else if (value === node.value) {
            return true;
        }
        else if (value < node.value) {
            return this.exists(node.left, value);
        }
        else {
            return this.exists(node.right, value);
        }
    };
    BST.prototype.inOrderTraverse = function (node) {
        if (node === void 0) { node = this.root; }
        if (node !== null) {
            this.inOrderTraverse(node.left);
            console.log(node.value);
            this.inOrderTraverse(node.right);
        }
    };
    return BST;
}());
exports.BST = BST;
