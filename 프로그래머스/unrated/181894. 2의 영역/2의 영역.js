function solution(arr) {
  let startIdx = arr.indexOf(2);
  let endIdx = arr.lastIndexOf(2);
  if (startIdx >= 0 && endIdx >= 0) {
    return arr.slice(startIdx, endIdx + 1);
  }
  return [-1];
}