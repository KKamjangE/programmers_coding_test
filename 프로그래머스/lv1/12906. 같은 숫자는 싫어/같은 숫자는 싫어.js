function solution(arr) {
  let ans = [];

  arr.forEach((value) => {
    if (ans[ans.length - 1] != value) ans.push(value);
  });

  return ans;
}