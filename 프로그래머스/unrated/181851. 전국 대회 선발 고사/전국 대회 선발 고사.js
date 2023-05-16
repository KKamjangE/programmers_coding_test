function solution(rank, attendance) {
  let arr = rank
    .map((value, idx) => {
      if (attendance[idx]) return [value, idx];
    })
    .filter((value) => value != undefined);

  arr.sort((a, b) => a[0] - b[0]);

  let [a, b, c] = arr.map((value) => value[1]);

  return 10000 * a + 100 * b + c;
}