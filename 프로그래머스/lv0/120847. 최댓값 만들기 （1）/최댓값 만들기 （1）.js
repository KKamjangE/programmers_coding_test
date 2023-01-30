function solution(numbers) {
  let newNum = numbers.sort((a, b) => b - a);
  return newNum[0] * newNum[1];
}