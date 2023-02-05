function solution(n) {
  var answer = [];
  let idx = 2;
  while (n !== 1) {
    if (n % idx === 0) {
      answer.push(idx);
      n /= idx;
      idx = 2;
    } else {
      idx += 1;
    }
  }
  return Array.from(new Set(answer));
}