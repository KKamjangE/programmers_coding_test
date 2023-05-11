function solution(strArr) {
  return strArr.map((value, idx) => {
    if (idx % 2 === 0) {
      return value.toLowerCase();
    } else {
      return value.toUpperCase();
    }
  });
}