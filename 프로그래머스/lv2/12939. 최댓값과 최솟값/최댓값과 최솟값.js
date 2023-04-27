function solution(s) {
  let sToArr = s.split(" ").map((value) => parseInt(value));
  let minNum = Math.min(...sToArr);
  let maxNum = Math.max(...sToArr);
  let ans = [minNum, maxNum].map((value) => value + "").join(" ");
  return ans;
}