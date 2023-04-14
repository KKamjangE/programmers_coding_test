function solution(arr) {
  let ans = [];

  for (i of arr) {
    if (ans.length === 0) {
      ans.push(i);
    } else {
      if (ans[ans.length - 1] != i) {
        ans.push(i);
      }
    }
  }

  return ans;
}