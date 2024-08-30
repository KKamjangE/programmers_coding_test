function solution(number) {
  return number.split("").reduce((prev, curr) => prev + Number(curr), 0) % 9;
}