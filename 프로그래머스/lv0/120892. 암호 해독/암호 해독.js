function solution(cipher, code) {
  var answer = "";
  arr = cipher.split("");
  let count = 0;
  for (i of arr) {
    count += 1;
    if (count % code === 0) {
      answer += i;
    }
  }
  return answer;
}