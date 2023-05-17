function solution(date1, date2) {
  let a = date1[0] * 12 + date1[1] * 30 + date1[2];
  let b = date2[0] * 12 + date2[1] * 30 + date2[2];
  return a < b ? 1 : 0;
}