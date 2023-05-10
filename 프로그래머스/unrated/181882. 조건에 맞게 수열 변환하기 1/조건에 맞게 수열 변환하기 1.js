function solution(arr) {
  return arr.map((value) => {
    if (value >= 50 && value % 2 === 0) {
      return value / 2;
    } else if (50 > value && value % 2 != 0) {
      return value * 2;
    } else {
      return value;
    }
  });
}