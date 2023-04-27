function solution(a, b, c) {
  let ans = 1;
  if (a === b && b === c && a === c) {
    for (let i = 1; i <= 3; i++) {
      ans *= a ** i + b ** i + c ** i;
    }
  } else if (a === b || a === c || b === c) {
    for (let i = 1; i <= 2; i++) {
      ans *= a ** i + b ** i + c ** i;
    }
  } else {
    ans = a + b + c;
  }
  return ans;
}