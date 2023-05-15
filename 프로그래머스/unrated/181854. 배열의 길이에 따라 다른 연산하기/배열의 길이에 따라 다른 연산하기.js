function solution(arr, n) {
  if (arr.length % 2 === 0) {
    return arr.map((value, idx) => {
      if (idx % 2 != 0) {
        return value + n;
      } else {
        return value;
      }
    });
  } else {
    return arr.map((value, idx) => {
      if (idx % 2 === 0) {
        return value + n;
      } else {
        return value;
      }
    });
  }
}