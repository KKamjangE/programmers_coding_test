function solution(rank, attendance) {
  let ans = 0;
  let arr = rank
    .map((value, idx) => {
      if (attendance[idx]) return [value, idx];
    })
    .filter((value) => value != undefined);

  arr.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < 3; i++) {
    if (i === 0) {
      ans += 10000 * arr[i][1];
    } else if (i === 1) {
      ans += 100 * arr[i][1];
    } else {
      ans += arr[i][1];
    }
  }
  return ans;
}