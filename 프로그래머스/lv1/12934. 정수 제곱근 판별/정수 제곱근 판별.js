function solution(n) {
  let sqrt = n ** 0.5;
  if (n % sqrt == 0) {
    return (sqrt + 1) ** 2;
  } else {
    return -1;
  }
}