function solution(q, r, code) {
  let ans = "";
  [...code].forEach((value, idx) => {
    if (idx % q === r) {
      ans += value;
    }
  });
  return ans;
}