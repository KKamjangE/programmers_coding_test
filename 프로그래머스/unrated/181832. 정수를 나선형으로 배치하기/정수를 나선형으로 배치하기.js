function solution(n) {
  let ans = Array.from({ length: n }, () => new Array(n).fill(0));
  let num = 1;
  let rowStart = 0;
  let rowEnd = n - 1;
  let colStart = 0;
  let colEnd = n - 1;

  while (num <= n * n) {
    for (let i = colStart; i <= colEnd; i++) {
      ans[rowStart][i] = num;
      num++;
    }
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      ans[i][colEnd] = num;
      num++;
    }
    colEnd--;

    for (let i = colEnd; i >= colStart; i--) {
      ans[rowEnd][i] = num;
      num++;
    }
    rowEnd--;

    for (let i = rowEnd; i >= rowStart; i--) {
      ans[i][colStart] = num;
      num++;
    }
    colStart++;
  }

  return ans;
}