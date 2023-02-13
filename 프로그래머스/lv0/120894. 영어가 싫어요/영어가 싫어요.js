function solution(numbers) {
  const numArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  numArr.forEach((item, index) => (numbers = numbers.split(item).join(index)));
  return Number(numbers);
}