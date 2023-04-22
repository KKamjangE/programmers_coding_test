function solution(arr, k) {
  return arr.map((value) => (k % 2 === 0 ? value + k : value * k));
}