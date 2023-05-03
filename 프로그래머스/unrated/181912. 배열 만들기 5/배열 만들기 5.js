function solution(intStrs, k, s, l) {
  var ans = [];
  intStrs.forEach((value) => {
    let tmp = value.split("").splice(s, l).join("");
    if (tmp > k) {
      ans.push(Number(tmp));
    }
  });
  return ans;
}