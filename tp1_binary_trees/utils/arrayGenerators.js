"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateLargeDisorderedArray = void 0;
function generateLargeDisorderedArray(size) {
    var _a;
    var array = [];
    // Llenar el array con números del 1 al size - 1
    for (var i = 1; i < size; i++) {
        array.push(i);
    }
    // Agregar un número repetido al azar
    var repeatedNumber = Math.floor(Math.random() * (size - 1)) + 1;
    array.push(repeatedNumber);
    // Mezclar el array para desordenarlo
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
    }
    return array;
}
exports.generateLargeDisorderedArray = generateLargeDisorderedArray;
