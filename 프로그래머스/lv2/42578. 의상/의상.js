function solution(clothes) {
  let ans = 1;
  let obj = {};

  clothes.forEach(([name, category]) => {
    if (!obj[category]) obj[category] = 0;
    obj[category] += 1;
  });

  Object.keys(obj).forEach((key) => {
    ans *= obj[key] + 1;
  });

  return ans - 1;
}