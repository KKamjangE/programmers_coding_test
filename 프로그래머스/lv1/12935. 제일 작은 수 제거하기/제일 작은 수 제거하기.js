function solution(arr) {
  small = arr.indexOf(Math.min(...arr));
  arr.splice(small, 1);
  return arr.length == 0 ? [-1] : arr;
}