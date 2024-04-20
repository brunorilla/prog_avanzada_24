export function generateLargeDisorderedArray(size: number): number[] {
  const array: number[] = [];

  // Llenar el array con números del 1 al size - 1
  for (let i = 1; i < size; i++) {
    array.push(i);
  }

  // Agregar un número repetido al azar
  const repeatedNumber = Math.floor(Math.random() * (size - 1)) + 1;
  array.push(repeatedNumber);

  // Mezclar el array para desordenarlo
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
