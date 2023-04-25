function solution(a, b) {
  let resultA = parseInt(a + "" + b + "");
  let resultB = parseInt(b + "" + a + "");
  return resultA >= resultB ? resultA : resultB
}