function solution(arr, query) {
  query.forEach((value, idx) => {
    if (idx % 2 === 0) {
      arr = arr.slice(0, value + 1);
    } else {
      arr = arr.slice(value, arr.length);
    }
  });

  return arr;
}