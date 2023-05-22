function solution(n) {
  let ans = n;
  let binaryN = n.toString(2);
  let count = 0;
  [...binaryN].forEach((value) => {
    if (value === "1") count += 1;
  });

  while (1) {
    ans += 1;
    let tmp = ans.toString(2);
    let tmpCount = 0;
    [...tmp].forEach((value) => {
      if (value === "1") tmpCount += 1;
    });

    if (tmpCount === count) {
      break;
    }
  }

  return ans;
}