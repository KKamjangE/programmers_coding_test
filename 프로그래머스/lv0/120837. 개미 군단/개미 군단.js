function solution(hp) {
  let answer = 0;
  let newHp = 0;
  answer += Math.floor(hp / 5);
  newHp = hp % 5;
  answer += Math.floor(newHp / 3);
  newHp %= 3;
  answer += newHp;
  return answer;
}