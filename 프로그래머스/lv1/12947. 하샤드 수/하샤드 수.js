function solution(x) {
  x += "";
  sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
  }
  if (x % sum == 0) {
    return true;
  } else {
    return false;
  }
}