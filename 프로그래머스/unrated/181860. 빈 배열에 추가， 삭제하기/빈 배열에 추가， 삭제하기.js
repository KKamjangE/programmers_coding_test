function solution(arr, flag) {
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    if (flag[i]) {
      for (let j = 0; j < arr[i] * 2; j++) {
        ans.push(arr[i]);
      }
    } else {
      for (let j = 0; j < arr[i]; j++) {
        ans.pop();
      }
    }
  }

  return ans;
}