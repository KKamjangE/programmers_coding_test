function solution(a, b) {
  ans = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    ans += i;
  }
  return ans;
}