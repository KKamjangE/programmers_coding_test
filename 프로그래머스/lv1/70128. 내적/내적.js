function solution(a, b) {
  ans = 0;
  for (let i in a) {
    ans += a[i] * b[i];
  }
  return ans;
}