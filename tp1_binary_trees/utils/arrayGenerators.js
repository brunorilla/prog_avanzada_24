"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortArray = exports.generateOrderedArray = exports.generateConstrainedDisorderedArray = void 0;
function generateConstrainedDisorderedArray(size, multiplier) {
    var _a;
    if (multiplier === void 0) { multiplier = 10; }
    var array = [];
    var maxValue = size * multiplier; // Define el valor máximo como un múltiplo de `size`.
    // Llenar el array con números consecutivos comenzando desde un número base hasta base+size-2
    var baseNumber = Math.floor(Math.random() * (maxValue - size + 1)); // Asegurar que hay espacio para `size` números consecutivos.
    for (var i = 0; i < size - 1; i++) {
        array.push(baseNumber + i);
    }
    // Agregar un número repetido al azar
    var repeatedNumber = array[Math.floor(Math.random() * (array.length))];
    array.push(repeatedNumber);
    // Mezclar el array para desordenarlo
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
    }
    return array;
}
exports.generateConstrainedDisorderedArray = generateConstrainedDisorderedArray;
function generateOrderedArray(size) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(i);
    }
    return array;
}
exports.generateOrderedArray = generateOrderedArray;
function sortArray(numbers) {
    return numbers.sort(function (a, b) { return a - b; });
}
exports.sortArray = sortArray;
