// Function that outputs the sum of all values in the modelInNumbers array
export function sumArrayValues(array: number[]): number {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
