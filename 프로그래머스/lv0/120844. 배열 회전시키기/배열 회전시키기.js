function solution(numbers, direction) {
  if (direction === "right") {
    let a = numbers[numbers.length - 1];
    numbers.pop();
    return [a, ...numbers];
  } else if (direction === "left") {
    let a = numbers[0];
    numbers.shift();
    return [...numbers, a];
  }
}