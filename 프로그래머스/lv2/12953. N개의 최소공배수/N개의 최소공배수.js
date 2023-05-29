function solution(arr) {
  let ans = 0;
  let maxNum = Math.max(...arr);
  let count = 0;

  while (count < arr.length) {
    count = 0;
    ans += maxNum;
    for (let i = 0; i < arr.length; i++) {
      if (ans % arr[i] === 0) {
        count += 1;
      }
    }
  }

  return ans;
}