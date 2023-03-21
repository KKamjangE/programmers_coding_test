function solution(n) {
  ans = "";
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      ans += "수";
    } else {
      ans += "박";
    }
  }
  return ans;
}