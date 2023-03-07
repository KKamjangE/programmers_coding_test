function solution(num, k) {
  const ans = String(num)
    .split("")
    .indexOf(k + "");
  return ans >= 0 ? ans + 1 : ans;
}