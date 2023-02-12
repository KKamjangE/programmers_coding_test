function solution(order) {
  var answer = 0;
  let arr = order + "".split("");
  for (i of arr) {
    if (i % 3 === 0 && i != 0) {
      answer += 1;
    }
  }
  return answer;
}