function solution(arr, divisor) {
  let ans = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor == 0) {
      ans.push(arr[i]);
    }
  }
  return ans.length == 0 ? [-1] : ans;
}