function solution(a, d, included) {
  let ans = 0;
  let num = a;
  included.forEach((value) => {
    if (value) {
      ans += num;
    }
    num += d;
  });

  return ans;
}