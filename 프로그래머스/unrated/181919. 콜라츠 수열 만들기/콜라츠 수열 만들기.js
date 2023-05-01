function solution(n) {
  var ans = [n];
  while (n != 1) {
    if (n % 2 === 0) {
      n /= 2;
      ans.push(n);
    } else if (n % 2 != 0) {
      n = 3 * n + 1;
      ans.push(n);
    }
  }
  return ans;
}