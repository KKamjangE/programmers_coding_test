function solution(numbers, n) {
  let ans = 0;
  for (let i = 0; i < numbers.length; i++) {
    ans += numbers[i];
    if (ans > n) break;
  }
  return ans;
}