function solution(s1, s2) {
  var answer = 0;
  s1.forEach((item) => (s2.indexOf(item) >= 0 ? (answer += 1) : 0));
  return answer;
}