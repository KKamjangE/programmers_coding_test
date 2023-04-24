function solution(my_string, overwrite_string, s) {
  let arr = my_string.split("");
  arr.splice(s, overwrite_string.length, ...overwrite_string.split(""));
  return arr.join("");
}