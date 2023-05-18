function solution(n, k) {
  let ans = [];
  const arr = new Array(n).fill(1);
  for (let i = 1; i < n; i++) arr[i] = arr[i - 1] + 1;

  let nth = k - 1;

  const factorial = (n) => {
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
  };

  while (arr.length) {
    if (nth === 0) {
      ans.push(...arr);
      break;
    }

    const fact = factorial(arr.length - 1);
    const index = (nth / fact) >> 0;
    nth = nth % fact;

    ans.push(arr[index]);
    arr.splice(index, 1);
  }

  return ans;
}