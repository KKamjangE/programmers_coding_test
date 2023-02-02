function solution(my_string) {
  var answer = 0;
  my_string.split("").forEach((e) => (!isNaN(e) ? (answer += Number(e)) : 0));
  return answer;
}