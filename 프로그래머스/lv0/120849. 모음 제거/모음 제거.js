function solution(my_string) {
  const str = "aeiou";
  return my_string
    .split("")
    .filter((el) => !str.includes(el))
    .join("");
}