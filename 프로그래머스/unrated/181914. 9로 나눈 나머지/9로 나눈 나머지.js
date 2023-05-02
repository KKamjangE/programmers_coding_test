function solution(number) {
  let sum = number
    .split("")
    .map((value) => Number(value))
    .reduce((prev, curr) => prev + curr, 0);

  return sum % 9;
}