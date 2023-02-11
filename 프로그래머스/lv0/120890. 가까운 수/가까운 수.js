function solution(array, n) {
  array.push(n);
  array.sort((a, b) => a - b);
  if (array[array.indexOf(n) - 1] === undefined) {
    return array[array.indexOf(n) + 1];
  } else if (array[array.indexOf(n) + 1] === undefined) {
    return array[array.indexOf(n) - 1];
  }
  return n - array[array.indexOf(n) - 1] <= array[array.indexOf(n) + 1] - n
    ? array[array.indexOf(n) - 1]
    : array[array.indexOf(n) + 1];
}