function solution(n) {
  ans = Array.from(n + "");
  return ans.map((i) => Number(i)).reverse();
}