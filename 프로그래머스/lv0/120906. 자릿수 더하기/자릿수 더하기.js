function solution(n) {
  let ans = 0;
  Array.from(String(n), (item) => Number(item)).map((item) => (ans += item));
  return ans;
}