function solution(n) {
  arr = Array.from((n += ""));
  return Number(arr.sort((a, b) => b - a).join(""));
}