function solution(my_string, n) {
  return [...my_string].map((a) => a.repeat(n)).join("");
}