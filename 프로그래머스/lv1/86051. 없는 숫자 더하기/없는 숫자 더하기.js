function solution(numbers) {
  ans = 0;
  for (a of numbers) {
    ans += a;
  }
  return 45 - ans;
}