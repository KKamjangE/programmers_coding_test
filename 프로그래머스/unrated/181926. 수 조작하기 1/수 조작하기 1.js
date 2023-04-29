function solution(n, control) {
  var ans = n;
  let controls = {
    w: 1,
    s: -1,
    d: 10,
    a: -10,
  };

  control.split("").forEach((value) => {
    ans += controls[value];
  });

  return ans;
}