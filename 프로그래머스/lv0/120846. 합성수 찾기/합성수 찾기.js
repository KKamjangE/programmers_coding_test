function solution(n) {
  var answer = 0;
  if (n <= 3) {
    return 0;
  }
  for (let i = 3; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        answer += 1;
        break;
      }
    }
  }
  return answer;
}