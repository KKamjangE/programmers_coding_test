function solution(arr) {
  let ans = [];

  arr.forEach((value) => {
    for (let i = 0; i < value; i++) {
      ans.push(value);
    }
  });

  return ans;
}