function solution(ineq, eq, n, m) {
  let ans;
  if (ineq === "<") {
    if (eq === "=") {
      ans = n <= m;
    } else {
      ans = n < m;
    }
  } else {
    if (eq === "=") {
      ans = n >= m;
    } else {
      ans = n > m;
    }
  }

  return ans ? 1 : 0;
}