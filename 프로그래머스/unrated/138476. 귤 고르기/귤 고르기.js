function solution(k, tangerine) {
  let ans = 0;
  let obj = {};
  tangerine.forEach((value) => {
    obj[value] = ++obj[value] || 1;
  });

  const objValueToArr = Object.values(obj).sort((a, b) => b - a);
  let sum = 0;

  objValueToArr.forEach((value) => {
    if (sum < k) {
      ans += 1;
      sum += value;
    }
  });

  return ans;
}