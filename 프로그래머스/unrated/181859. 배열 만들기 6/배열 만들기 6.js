function solution(arr) {
  let answer = [];
  arr.forEach((value, idx) => {
    if (answer.length === 0) {
      answer.push(value);
    } else if (answer[answer.length - 1] === value) {
      answer.pop();
    } else {
      answer.push(value);
    }
  });
  return answer.length ? answer : [-1];
}