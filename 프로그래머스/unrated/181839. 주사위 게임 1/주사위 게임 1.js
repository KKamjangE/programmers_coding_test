function solution(a, b) {
  let ans = 0;
  let resultA = a % 2;
  let resultB = b % 2;
  if (resultA && resultB) {
    ans = a ** 2 + b ** 2;
  } else if (resultA || resultB) {
    ans = 2 * (a + b);
  } else {
    ans = Math.abs(a - b);
  }
  return ans;
}