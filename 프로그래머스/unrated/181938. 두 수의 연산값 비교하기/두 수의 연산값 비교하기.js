function solution(a, b) {
  resultA = parseInt(a + "" + (b + ""));
  resultB = 2 * a * b;
  return resultA >= resultB ? resultA : resultB;
}