function solution(arr) {
  let count = 1;
  let x = 1;
  while (arr.length != x) {
    x = 2 ** count;
    if (arr.length < x) {
      arr.push(0);
    } else if (arr.length > x) {
      count += 1;
    }
  }
  return arr;
}