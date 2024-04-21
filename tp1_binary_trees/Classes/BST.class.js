"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BST = void 0;
require("./BSTnode.class");
var BSTnode_class_1 = require("./BSTnode.class");
var perf_hooks_1 = require("perf_hooks");
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
    BST.prototype.insert = function (value, allowDuplicates) {
        if (allowDuplicates === void 0) { allowDuplicates = false; }
        var newNode = new BSTnode_class_1.BstNode(value);
        if (this.root === null) {
            this.root = newNode;
        }
        else if (allowDuplicates || !this.exists(this.root, value)) {
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
        var result = this.calculateHeight(this.root);
        console.log("++++++++++\nLa altura del BST es: ".concat(result, "\n++++++++++"));
        return result;
    };
    BST.prototype.exists = function (node, value, logPerformance) {
        if (logPerformance === void 0) { logPerformance = false; }
        var startTime;
        if (logPerformance) {
            console.log('\n*********\nResultado de búsqueda de valor\n*********');
            startTime = perf_hooks_1.performance.now(); // Iniciar timer
        }
        var result = false;
        while (node !== null) {
            if (value < node.value) {
                node = node.left;
            }
            else if (value > node.value) {
                node = node.right;
            }
            else {
                result = true;
                break;
            }
        }
        if (result && logPerformance)
            console.log("El valor [".concat(value, "] se encontr\u00F3 en el BST"));
        if (!result && logPerformance)
            console.log("El valor [".concat(value, "] no se encontr\u00F3 en el BST"));
        if (logPerformance) {
            var endTime = perf_hooks_1.performance.now(); // finalizar timer
            console.log('·············');
            console.log("Tiempo de b\u00FAsqueda para ".concat(value, ": ").concat(endTime - startTime, " milisegundos"));
            console.log('·············');
        }
        return result;
    };
    return BST;
}());
exports.BST = BST;
