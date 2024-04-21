export function generateConstrainedDisorderedArray(size: number, multiplier: number = 10): number[] {
  const array: number[] = [];
  const maxValue = size * multiplier; // Define el valor máximo como un múltiplo de `size`.

  // Llenar el array con números consecutivos comenzando desde un número base hasta base+size-2
  let baseNumber = Math.floor(Math.random() * (maxValue - size + 1)); // Asegurar que hay espacio para `size` números consecutivos.
  for (let i = 0; i < size - 1; i++) {
    array.push(baseNumber + i);
  }

  // Agregar un número repetido al azar
  const repeatedNumber = array[Math.floor(Math.random() * (array.length))];
  array.push(repeatedNumber);

  // Mezclar el array para desordenarlo
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export function generateOrderedArray(size: number): number[] {
  let array: number[] = [];

  for (let i = 0; i < size; i++) {
    array.push(i);
  }

  return array;
}

export function sortArray(numbers: number[]): number[] {
  return numbers.sort((a, b) => a - b);
}


