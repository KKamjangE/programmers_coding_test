function solution(number, k) {
  var ans = [];
  for (i of number) {
    while (k > 0 && ans && ans[ans.length - 1] < i) {
      ans.pop();
      k--;
    }
    ans.push(i);
  }
  return ans.slice(0, ans.length - k).join("");
}