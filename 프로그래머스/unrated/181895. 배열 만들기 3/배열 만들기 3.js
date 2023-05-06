function solution(arr, intervals) {
  let ans = [];
  intervals.forEach((value) => {
    [a, b] = value;
    ans.push(...arr.slice(a, b + 1));
  });
  return ans;
}