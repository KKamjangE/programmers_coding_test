function solution(id_list, report, k) {
  let ans = {};
  let obj = {};
  report = [...new Set(report)];
  id_list.forEach((value) => {
    obj[value] = 0;
    ans[value] = 0;
  });

  report.forEach((value) => {
    let [_, target] = value.split(" ");
    obj[target] += 1;
  });

  report.forEach((value) => {
    let [reporter, target] = value.split(" ");
    if (obj[target] >= k) {
      ans[reporter] += 1;
    }
  });

  return Object.values(ans).map((value) => value);
}