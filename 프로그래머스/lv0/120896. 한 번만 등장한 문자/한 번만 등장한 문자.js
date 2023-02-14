function solution(s) {
  let ans = [];
  let arr = [...s];
  arr.forEach((item) => {
    if (s.indexOf(item) === s.lastIndexOf(item)) {
      ans.push(item);
    }
  });
  return ans.sort().join("");
}