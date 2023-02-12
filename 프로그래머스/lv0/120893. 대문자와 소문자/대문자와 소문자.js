function solution(my_string) {
  arr = my_string.split("");
  return arr
    .map((i) => (i == i.toUpperCase() ? i.toLowerCase() : i.toUpperCase()))
    .join("");
}