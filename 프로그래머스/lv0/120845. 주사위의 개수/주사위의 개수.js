function solution(box, n) {
  var answer = 0;
  box.reduce((prev, curr) => (answer = prev * Math.floor(curr / n)), 1);
  return answer;
}