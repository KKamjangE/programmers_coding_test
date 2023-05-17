function solution(n) {
  let ans = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        ans[i][j] = 1;
      }
    }
  }
  return ans;
}